// ---
import { useEffect, useState } from "react";
import NavItem from "./NavItem";
import { getLangFromUrl, useTranslations } from '../i18n/utils';

interface IProps {
    lang: string;
}

interface IRoute {
    url: string;
    title: string;
}

// ---


function Navbar() {
    const [isVisible, setIsVisible] = useState(true); // Estado para controlar la visibilidad del header
    const [lastScrollTop, setLastScrollTop] = useState(0); // Estado para guardar el último scroll
    const [routes, setRoutes] = useState<IRoute[]>([]);
    
    useEffect(() => {
        const lang = getLangFromUrl(window.location.href);
        const t = useTranslations(lang);

        const routes: IRoute[] = [
            {
                url: `/${lang}/`,
                title: t('nav.home') as string
            },
            {
                url: `/${lang}/gallery`,
                title: t('nav.gallery') as string
            },
            {
                url: `/${lang}/about`,
                title: t('nav.about') as string
            },
        ]

        setRoutes(routes);
    }, [])
    
    useEffect(() => {
        const handleScroll = () => {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScrollTop > lastScrollTop) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }

        setLastScrollTop(currentScrollTop);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll); // Limpia el evento al desmontar el componente
        };
    }, [lastScrollTop]); 

    return ( 
    <div className={`fixed max-lg:hidden ${isVisible ? 'top-0' : '-top-20'} 
        flex flex-row justify-center 
        items-center w-svw p-4 px-20 z-10 
        bg-transparent transition-all 
        
        `}>
        
        <div className="w-full h-fit z-20 bg-old-gold/65 rounded-full shadow-md">
            <nav className={`w-full h-10
                rounded-full z-50 
                shadow-sm
                `}>
                <ul className={`flex flex-row justify-evenly 
                    items-center h-full w-full 
                    font-semibold backdrop-blur-md 
                    rounded-full shadow-md`}>
                    {routes.map( r => <NavItem url={r.url} title={r.title} />)}
                </ul>
            </nav>
        </div>
    </div>
     );
}

export default Navbar;Navbar