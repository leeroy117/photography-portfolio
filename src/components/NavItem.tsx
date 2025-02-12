import { useEffect, useState } from "react";

interface Props {
    url: string;
    title: string;
}

function NavItem({url, title}: Props) {
    const [currentPath, setCurrentPath] = useState('');
    console.log("🚀 ~ NavItem ~ currentPath:", currentPath)
    console.log("🚀 ~ NavItem ~ gallery:", currentPath.includes('gallery'));
    console.log('url url:---', url );
    console.log('url url:---bolean', url === currentPath);
    
    useEffect(() => {
        setCurrentPath(window.location.pathname);
    }, []);

    return ( 
        <li className="">
            <a 
                href={url} 
                className={`${currentPath == url || 
                    (currentPath.includes('gallery') && url.includes('gallery')) 
                    ? 'text-slate-300 scale-150 tracking-widest' : 'text-black-carbon' } transition-all`}>
                {title}
            </a> 
        </li>

     );
}

export default NavItem;