import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">
              À propos de Hellis Bank
            </h3>
            <p className="text-sm">
              Hellis Bank est votre partenaire financier de confiance, offrant
              des services bancaires innovants et sécurisés pour répondre à tous
              vos besoins financiers.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-gray-300">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gray-300">
                  Nos services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-gray-300">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Nous contacter</h3>
            <p className="text-sm">
              123 Rue de la Banque
              <br />
              75001 Paris, France
              <br />
              Tél : +33 1 23 45 67 89
              <br />
              Email : contact@hellisbank.com
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Hellis Bank. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
