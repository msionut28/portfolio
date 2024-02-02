import { AiOutlineMessage } from "react-icons/ai"
import { BsBrowserSafari } from "react-icons/bs"
import { FaHome } from "react-icons/fa"
import { FaGears, FaLaptopCode } from "react-icons/fa6";
import { ImProfile } from "react-icons/im"

const routes = [
    {
        name: 'HOME',
        to: '/',
        Icon: FaHome
    },
    {
        name: 'ABOUT',
        to: '/about',
        Icon: ImProfile
    },
    {
        name: 'BROWSER',
        to: '/browser',
        Icon: BsBrowserSafari
    },
    {
        name: 'CONTACT',
        to: '/contact',
        Icon: AiOutlineMessage
    },
    {
        name: 'PROJECTS',
        to: '/projects',
        Icon: FaLaptopCode
    },
    {
        name: 'SKILLS',
        to: '/skills',
        Icon: FaGears
    }
]

export {routes}