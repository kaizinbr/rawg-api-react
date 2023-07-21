import { BiDotsVerticalRounded } from 'react-icons/bi';
import { BsPlaystation, BsNintendoSwitch, BsAndroid, BsApple } from 'react-icons/bs';
import { SiWindows11, SiIos, SiNintendo3Ds, SiMacos, SiLinux, SiWiiu, SiWii, SiCommodore, SiAtari, SiSega, SiJaguar } from 'react-icons/si';
import { FaXbox } from 'react-icons/fa';
import { GiGamepad } from 'react-icons/gi';

export function getReactionIcon(reaction: string) {


    switch (reaction) {
        case '1':
            return <span></span>
            break;
        case '2':
            return <BsPlaystation className="text-primary-500" />
            break;
        case '3':
            return <BsPlaystation className="text-primary-500" />
            break;
        case '4':
            return <BsPlaystation className="text-primary-500" />
            break;
        case '5':
            return <BsPlaystation className="text-primary-500" />
            break;
        case '6':
            return <SiSega className="text-primary-500" />
            break;
        default:
            return <GiGamepad className="text-primary-500" />;

    }


}

export function getPlatformIcon(slug: string) {
    switch (slug) {
        case 'playstation5':
            return <BsPlaystation className="text-primary-500" />
            break;
        case 'playstation4':
            return <BsPlaystation className="text-primary-500" />
            break;
        case 'playstation3':
            return <BsPlaystation className="text-primary-500" />
            break;
        case 'playstation2':
            return <BsPlaystation className="text-primary-500" />
            break;
        case 'playstation1':
            return <BsPlaystation className="text-primary-500" />
            break;
        case 'ps-vita':
            return <BsPlaystation className="text-primary-500" />
            break;
        case 'psp':
            return <BsPlaystation className="text-primary-500" />
            break;
        case 'xbox-series-x':
            return <FaXbox className="text-primary-500" />
            break;
        case 'xbox-one':
            return <FaXbox className="text-primary-500" />
            break;
        case 'xbox360':
            return <FaXbox className="text-primary-500" />
            break;
        case 'xbox-old':
            return <FaXbox className="text-primary-500" />
            break;
        case 'nintendo-switch':
            return <BsNintendoSwitch className="text-primary-500" />
            break;
        case 'wii-u':
            return <SiWiiu className="text-primary-500" />
            break;
        case 'wii':
            return <SiWii className="text-primary-500" />
            break;
        case 'gamecube':
            return <GiGamepad className="text-primary-500" />
            break;
        case 'nintendo-64':
            return <GiGamepad className="text-primary-500" />
            break;
        case 'super-nintendo':
            return <GiGamepad className="text-primary-500" />
            break;
        case 'nes':
            return <GiGamepad className="text-primary-500" />
            break;
        case 'gameboy':
            return <GiGamepad className="text-primary-500" />
            break;
        case 'gameboy-advance':
            return <GiGamepad className="text-primary-500" />
            break;
        case 'gameboy-color':
            return <GiGamepad className="text-primary-500" />
            break;
        case 'nintendo-ds':
            return <SiNintendo3Ds className="text-primary-500" />
            break;
        case 'nintendo-3ds':
            return <SiNintendo3Ds className="text-primary-500" />
            break;
        case 'nintendo-dsi':
            return <SiNintendo3Ds className="text-primary-500" />
            break;
        case 'pc':
            return <SiWindows11 className="text-primary-500" />
            break;
        case 'macos':
            return <SiMacos className="text-primary-500" />
            break;
        case 'linux':
            return <SiLinux className="text-primary-500" />
            break;
        case 'ios':
            return <SiIos className="text-primary-500" />
            break;
        case 'android':
            return <BsAndroid className="text-primary-500" />
            break;
        case 'atari-2600':
            return <SiAtari className="text-primary-500" />
            break;
        case 'atari-5200':
            return <SiAtari className="text-primary-500" />
            break;
        case 'atari-7800':
            return <SiAtari className="text-primary-500" />
            break;
        case 'atari-flashback':
            return <SiAtari className="text-primary-500" />
            break;
        case 'atari-8-bit':
            return <SiAtari className="text-primary-500" />
            break;
        case 'atari-st':
            return <SiAtari className="text-primary-500" />
            break;
        case 'atari-lynx':
            return <SiAtari className="text-primary-500" />
            break;
        case 'atari-xegs':
            return <SiAtari className="text-primary-500" />
            break;
        case 'jaguar':
            return <SiJaguar className="text-primary-500" />
            break;
        case 'commodore-amiga':
            return <SiCommodore className="text-primary-500" />
            break;
        case 'sega-master-system':
            return <SiSega className="text-primary-500" />
            break;
        case 'genesis':
            return <SiSega className="text-primary-500" />
            break;
        case 'sega-32x':
            return <SiSega className="text-primary-500" />
            break;
        case 'sega-cd':
            return <SiSega className="text-primary-500" />
            break;
        case 'dreamcast':
            return <SiSega className="text-primary-500" />
            break;
        case 'game-gear':
            return <SiSega className="text-primary-500" />
            break;
        case 'saturn':
            return <SiSega className="text-primary-500" />
            break;
        case 'apple-ii':
            return <BsApple className="text-primary-500" />
            break;
        case '3do':
            return <SiSega className="text-primary-500" />
            break;
        case 'neo-geo':
            return <SiSega className="text-primary-500" />
            break;
        case 'snes':
            return <GiGamepad className="text-primary-500" />
            break;
        case 'neo-geo-cd':
            return <SiSega className="text-primary-500" />
            break;
        default:
            return <GiGamepad className="text-primary-500" />;

    }


}