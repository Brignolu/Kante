'use client'

const Menu = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="flex justify-center w-full">
      <ul className="flex flex-row gap-4 list-none p-0 m-0">
        <li>
          <button 
            onClick={() => scrollToSection('realisations')}
            className="inline-block px-6 py-3 border-2 border-white rounded-lg bg-transparent text-white text-base text-center no-underline cursor-pointer transition-all duration-300 hover:bg-white hover:text-gray-800"
          >
            Nos Réalisations
          </button>
        </li>
        <li>
          <button 
            onClick={() => scrollToSection('presentation')}
            className="inline-block px-6 py-3 border-2 border-white rounded-lg bg-transparent text-white text-base text-center no-underline cursor-pointer transition-all duration-300 hover:bg-white hover:text-gray-800"
          >
            À Propos
          </button>
        </li>
        <li>
          <button 
            onClick={() => scrollToSection('contact')}
            className="inline-block px-6 py-3 border-2 border-white rounded-lg bg-transparent text-white text-base text-center no-underline cursor-pointer transition-all duration-300 hover:bg-white hover:text-gray-800"
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
