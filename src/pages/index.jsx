import Layout from "../Components/Layout";
import Card from "../Components/Card";

export default function Home() {
  return (
    <>
      <Layout>
        Home
        <div className="grid grid-cols-3 gap-8">
        <Card
          imageSrc={"/1.PNG"}
          category={"Set Lenceria"}
          price={55000}
          name={"Set Negro"}
        ></Card>
        <Card 
          imageSrc={"/VarillaBlanco.PNG"}
          category={"Set Lenceria"}
          price={58000}
          name={"Set Varilla Blanco"}
        ></Card>
        <Card 
          imageSrc={"/VarillaNegro.PNG"}
          category={"Set Lenceria"}
          price={58000}
          name={"Set Varilla Negro"}
        ></Card>
        <Card 
          imageSrc={"/NeoRojo.PNG"}
          category={"Set Lenceria"}
          price={66000}
          name={"Set Neo Rojo"}
        ></Card>
        <Card 
          imageSrc={"/OliviaBicolor.jpeg"}
          category={"Set Lenceria"}
          price={48000}
          name={"Set Olivia Bicolor"}
        ></Card>
        <Card
          imageSrc={"/Anastasia.PNG"}
          category={"Set Lenceria"}
          price={60000}
          name={"Set Anastasia"}
        ></Card>
        <Card 
          imageSrc={"/VarillaLigero.PNG"}
          category={"Set Lenceria"}
          price={52000}
          name={"Set Varilla Liguero"}
        ></Card>
        <Card 
          imageSrc={"/Vaqueras1.PNG"}
          category={"Botas"}
          price={230000}
          name={"Botas Vaqueras 1"}
        ></Card>
        </div>
      </Layout>
    </>
  );
}
