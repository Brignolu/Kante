import { TEXTE_PRESENTATION } from "../Constantes";
const Page = () => {
    return (
        <section className="bg-">
        <h1 className="text-3xl font-bold text-center mt-4 mb-4">Réalisations</h1>
        <p className="m-5 text-left font-sans text-lg antialiased text-gray-700"> 
        {TEXTE_PRESENTATION}
        </p>
        </section>
        );
    };
    
    export default Page;