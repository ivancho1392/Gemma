import { ButtonWhatsapp } from "../ButtonWhatsapp";

const Layout = ({ children }) => {
    return (
        <div className='flex flex-col mt-20 items-center'>
            {children}
            <ButtonWhatsapp />
        </div>
    );
};

export default Layout;
