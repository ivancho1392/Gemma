import {
    AuthenticationDetails,
    CognitoUser,
    CognitoUserPool,
  } from "amazon-cognito-identity-js";
  import config from "../../cognitoConfig";
  
  const poolData = {
    UserPoolId: config.userPoolId,
    ClientId: config.userPoolWebClientId,
  };
  
  const userPool = new CognitoUserPool(poolData);
  
  export const signIn = (username, password) => {
    const authenticationData = {
      Username: username,
      Password: password,
    };
  
    const authenticationDetails = new AuthenticationDetails(authenticationData);
  
    const userData = {
      Username: username,
      Pool: userPool,
    };
  
    const cognitoUser = new CognitoUser(userData);
  
    return new Promise((resolve, reject) => {
      cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: result => {
          resolve(result);
        },
        onFailure: err => {
          reject(err);
        },
        newPasswordRequired: (userAttributes, requiredAttributes) => {
          resolve({ newPasswordRequired: true, userAttributes });
        },
      });
    });
  };
  
  export const signOut = () => {
    const cognitoUser = userPool.getCurrentUser();
    if (cognitoUser) {
      cognitoUser.signOut();
    }
  };
  
  export const isAuthenticated = () => {
    const cognitoUser = userPool.getCurrentUser();
    return !!cognitoUser;
  };
  
  export const getUserData = () => {
    const cognitoUser = userPool.getCurrentUser();
    if (cognitoUser) {
      return new Promise((resolve, reject) => {
        cognitoUser.getSession((err, session) => {
          if (err) {
            reject(err);
          } else {
            const accessToken = session.getAccessToken().getJwtToken();
            cognitoUser.getUserAttributes((err, attributes) => {
              if (err) {
                reject(err);
              } else {
                const userData = {
                  accessToken,
                  attributes,
                };
                resolve(userData);
              }
            });
          }
        });
      });
    } else {
      return Promise.reject(new Error("No se encontró un usuario autenticado."));
    }
  };
  
  export const changePassword = (username, oldPassword, newPassword) => {
    const userData = {
      Username: username,
      Pool: userPool,
    };
  
    const cognitoUser = new CognitoUser(userData);
  
    return new Promise((resolve, reject) => {
      cognitoUser.authenticateUser(
        new AuthenticationDetails({ Username: username, Password: oldPassword }),
        {
          onSuccess: () => {
            cognitoUser.changePassword(
              oldPassword,
              newPassword,
              (err, result) => {
                if (err) {
                  reject(err);
                } else {
                  resolve(result);
                }
              }
            );
          },
          onFailure: err => {
            reject(err);
          },
          newPasswordRequired: () => {
            cognitoUser.completeNewPasswordChallenge(
                newPassword,
                {},
                {
                onSuccess: () => {
                  resolve();
                },
                onFailure: err => {
                  reject(err);
                },
              }
            );
          },
        }
      );
    });
  };