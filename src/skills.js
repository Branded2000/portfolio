import './skills.css';
import { useState, useEffect } from 'react';
import PointerLine from './line_pointer_animation';
import Progressbar from './progressbar';
import { motion, AnimatePresence } from 'framer-motion';
import { FaVuejs, FaReact } from 'react-icons/fa';

function Skills() {

    const variants = {
        doNothig: { y: 0 },
        jump: {
            y: [0, -15, 0],
            rotateY: [0, 180, 0],
            transition: {
                ease: "easeIn",
                duration: 1,
                rotateY: { duration: 1 }
            },
        }
    };

    const [randNum, setNumber] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setNumber(Math.floor(Math.random() * 9));
        },
            5000
        );
        return () => {
            clearInterval(interval);
        };
    }, [randNum]);

    const [see_all, set_see_all] = useState(false);

    const [c_icon, set_c_icon] = useState(false);
    const [c_plus_plus_icon, set_c_plus_plus_icon] = useState(false);
    const [python_icon, set_python_icon] = useState(false);
    const [js_icon, set_js_icon] = useState(false);
    const [java_icon, set_java_icon] = useState(false);
    const [sql_icon, set_sql_icon] = useState(false);
    const [html_icon, set_html_icon] = useState(false);
    const [css_icon, set_css_icon] = useState(false);
    const [git_icon, set_git_icon] = useState(false);

    const [show_titles, set_show_titles] = useState(false);
    const show_all_titles = show_titles ? "show_titles" : "";

    const see_all_icons = () => {
        if (see_all) {
            set_show_titles(!show_titles);
            set_see_all(!see_all);
            set_c_icon(false);
            set_c_plus_plus_icon(false);
            set_python_icon(false);
            set_js_icon(false);
            set_java_icon(false);
            set_sql_icon(false);
            set_html_icon(false);
            set_css_icon(false);
            set_git_icon(false);
        }
        else {
            set_show_titles(!show_titles);
            set_see_all(!see_all);
            set_c_icon(true);
            set_c_plus_plus_icon(true);
            set_python_icon(true);
            set_js_icon(true);
            set_java_icon(true);
            set_sql_icon(true);
            set_html_icon(true);
            set_css_icon(true);
            set_git_icon(true);
        }
    }

    const onMouseEnter = (id) => {
        if (!see_all) {

            switch (id) {
                case 0:
                    set_c_icon(true);
                    break;
                case 1:
                    set_c_plus_plus_icon(true);
                    break;
                case 2:
                    set_python_icon(true);
                    break;
                case 3:
                    set_js_icon(true);
                    break;
                case 4:
                    set_java_icon(true);
                    break;
                case 5:
                    set_sql_icon(true);
                    break;
                case 6:
                    set_html_icon(true);
                    break;
                case 7:
                    set_css_icon(true);
                    break;
                case 8:
                    set_git_icon(true);
                    break;
                default:
            }
        }
    }

    const onMouseLeave = (id) => {
        if (!see_all) {
            switch (id) {
                case 0:
                    set_c_icon(false);
                    break;
                case 1:
                    set_c_plus_plus_icon(false);
                    break;
                case 2:
                    set_python_icon(false);
                    break;
                case 3:
                    set_js_icon(false);
                    break;
                case 4:
                    set_java_icon(false);
                    break;
                case 5:
                    set_sql_icon(false);
                    break;
                case 6:
                    set_html_icon(false);
                    break;
                case 7:
                    set_css_icon(false);
                    break;
                case 8:
                    set_git_icon(false);
                    break;
                default:
            }
        }
    }

    return (
        <>
            <section className='skills' id="skills">
                {/* <div className='separator'></div> */}

                <div className='all_skill_icons'>
                    <button className='see_all_icon_names_states' onClick={see_all_icons}> See All</button>
                    <div className='icon_column'>
                        <div className={`icon_container c c_1 ${show_all_titles}`} onMouseEnter={() => onMouseEnter(0)} onMouseLeave={() => onMouseLeave(0)}>
                            {c_icon && <PointerLine />}
                            <AnimatePresence>
                                <motion.svg
                                    variants={variants}
                                    animate={(c_icon === false && randNum === 0) ? 'jump' : 'doNothing'}
                                    id="icon_jump_c"
                                    className='icon' xmlns="http://www.w3.org/2000/svg" viewBox="32.18585611720149 20.47 223.6851360941233 247.05999999999997" width="2113" height="2500"><path d="M252.71 93.61a21.67 21.67 0 0 0-2.65-10.87 20.74 20.74 0 0 0-7.87-7.67Q198.77 50 155.32 25c-7.8-4.51-15.36-4.35-23.11.23C120.69 32 63 65.09 45.81 75.06c-7.08 4.1-10.52 10.38-10.52 18.54v100.8a21.77 21.77 0 0 0 2.55 10.66 20.63 20.63 0 0 0 8 7.88c17.19 10 74.89 43.05 86.41 49.85 7.75 4.58 15.31 4.74 23.12.23q43.41-25.08 86.87-50.09a20.63 20.63 0 0 0 8-7.88 21.77 21.77 0 0 0 2.55-10.66V93.61z" fill='#A8A9AD' /><path d="M252.73 194.4a21.72 21.72 0 0 1-2.55 10.66 18.58 18.58 0 0 1-1.45 2.24L144 144l98.19-68.93a20.72 20.72 0 0 1 7.86 7.67 21.57 21.57 0 0 1 2.66 10.87c.02 33.6.02 100.79.02 100.79z" fill="#CCCCCC" /><path d="M250.05 82.74L37.81 205.06a21.75 21.75 0 0 1-2.53-10.65V93.6c0-8.16 3.45-14.44 10.52-18.54C63 65.09 120.69 32 132.22 25.21c7.73-4.58 15.3-4.74 23.1-.23q43.41 25.08 86.87 50.09a20.72 20.72 0 0 1 7.86 7.67z" fill='#808080' /><path d="M148.2 184.72a39.91 39.91 0 0 1-35-20.63q-.53-.94-1-1.92A39.94 39.94 0 0 1 179 119.4c.53.64 1 1.31 1.53 2 .24.33.48.66.7 1l35.07-20.2q-1.28-2.06-2.68-4c-.49-.69-1-1.35-1.48-2A79.9 79.9 0 0 0 78 181.92c.34.64.69 1.27 1 1.9a79.91 79.91 0 0 0 136.86 3.62l-34.29-20.73a39.88 39.88 0 0 1-33.37 18.01z" fill="#000" /></motion.svg>
                            </AnimatePresence>
                            {c_icon && <Progressbar percentage="88%" percentage_val={88} color="#A8A9AD" />}
                        </div>
                        <div className={`icon_container c_plus_plus ${show_all_titles}`} onMouseEnter={() => onMouseEnter(1)} onMouseLeave={() => onMouseLeave(1)}>
                            {c_plus_plus_icon && <PointerLine />}
                            <AnimatePresence>
                                <motion.svg
                                    variants={variants}
                                    animate={(c_plus_plus_icon === false && randNum === 1) ? 'jump' : 'doNothing'}
                                    id="icon_jump_c_plus_plus" className='icon' xmlns="http://www.w3.org/2000/svg" width="2222" height="2500" viewBox="0 0 256 288" preserveAspectRatio="xMinYMin meet"><path d="M255.569 84.72c-.002-4.83-1.035-9.098-3.124-12.761-2.052-3.602-5.125-6.621-9.247-9.008-34.025-19.619-68.083-39.178-102.097-58.817-9.17-5.294-18.061-5.101-27.163.269C100.395 12.39 32.59 51.237 12.385 62.94 4.064 67.757.015 75.129.013 84.711 0 124.166.013 163.62 0 203.076c.002 4.724.991 8.909 2.988 12.517 2.053 3.711 5.169 6.813 9.386 9.254 20.206 11.703 88.02 50.547 101.56 58.536 9.106 5.373 17.997 5.565 27.17.269 34.015-19.64 68.075-39.198 102.105-58.817 4.217-2.44 7.333-5.544 9.386-9.252 1.994-3.608 2.985-7.793 2.987-12.518 0 0 0-78.889-.013-118.345" fill="#659AD2" /><path d="M128.182 143.509L2.988 215.593c2.053 3.711 5.169 6.813 9.386 9.254 20.206 11.703 88.02 50.547 101.56 58.536 9.106 5.373 17.997 5.565 27.17.269 34.015-19.64 68.075-39.198 102.105-58.817 4.217-2.44 7.333-5.544 9.386-9.252l-124.413-72.074" fill="#004482" /><path d="M91.101 164.861c7.285 12.718 20.98 21.296 36.69 21.296 15.807 0 29.58-8.687 36.828-21.541l-36.437-21.107-37.081 21.352" fill="#004482" /><path d="M255.569 84.72c-.002-4.83-1.035-9.098-3.124-12.761l-124.263 71.55 124.413 72.074c1.994-3.608 2.985-7.793 2.987-12.518 0 0 0-78.889-.013-118.345" fill="#00599C" /><path d="M248.728 148.661h-9.722v9.724h-9.724v-9.724h-9.721v-9.721h9.721v-9.722h9.724v9.722h9.722v9.721M213.253 148.661h-9.721v9.724h-9.722v-9.724h-9.722v-9.721h9.722v-9.722h9.722v9.722h9.721v9.721" fill="#000" /><path d="M164.619 164.616c-7.248 12.854-21.021 21.541-36.828 21.541-15.71 0-29.405-8.578-36.69-21.296a42.062 42.062 0 0 1-5.574-20.968c0-23.341 18.923-42.263 42.264-42.263 15.609 0 29.232 8.471 36.553 21.059l36.941-21.272c-14.683-25.346-42.096-42.398-73.494-42.398-46.876 0-84.875 38-84.875 84.874 0 15.378 4.091 29.799 11.241 42.238 14.646 25.48 42.137 42.637 73.634 42.637 31.555 0 59.089-17.226 73.714-42.781l-36.886-21.371" fill="#000" /></motion.svg>
                            </AnimatePresence>
                            {c_plus_plus_icon && <Progressbar percentage="82%" percentage_val={82} color="#004482" />}
                        </div>
                        <div className={`icon_container python c_3 ${show_all_titles}`} onMouseEnter={() => onMouseEnter(2)} onMouseLeave={() => onMouseLeave(2)}>
                            {python_icon && <PointerLine />}
                            <AnimatePresence>
                                <motion.svg
                                    variants={variants}
                                    animate={(python_icon === false && randNum === 2) ? 'jump' : 'doNothing'}
                                    id="icon_jump_python" className='icon' xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 32 32"><defs><linearGradient id="A" x1="811.527" y1="574.895" x2="665.255" y2="573.732" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#366a96" /><stop offset="1" stopColor="#3679b0" /></linearGradient><linearGradient id="B" x1="862.824" y1="642.176" x2="573.276" y2="642.176" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#ffc836" /><stop offset="1" stopColor="#ffe873" /></linearGradient></defs><g transform="matrix(.1617 0 0 .158089 -107.53764 -81.66187)"><path d="M716.255 544.487c0-13.623 3.653-21.034 23.822-24.563 13.693-2.4 31.25-2.7 47.627 0 12.935 2.135 23.822 11.77 23.822 24.563v44.945c0 13.182-10.57 23.98-23.822 23.98h-47.627c-16.164 0-29.787 13.782-29.787 29.363v21.564h-16.376c-13.852 0-21.917-9.988-25.305-23.964-4.57-18.776-4.376-29.963 0-47.945 3.794-15.687 15.917-23.964 29.77-23.964h65.52v-6h-47.645v-17.98z" fill="url(#A)" /><path d="M811.527 688.32c0 13.623-11.823 20.523-23.822 23.964-18.052 5.188-32.54 4.394-47.627 0-12.6-3.67-23.822-11.17-23.822-23.964v-44.945c0-12.935 10.782-23.98 23.822-23.98h47.627c15.864 0 29.787-13.71 29.787-29.963v-20.964h17.858c13.87 0 20.4 10.305 23.822 23.964 4.764 18.97 4.976 33.157 0 47.945-4.817 14.364-9.97 23.964-23.822 23.964H763.9v6h47.627v17.98z" fill="url(#B)" /><path d="M728.166 541.505c0-4.976 3.988-9 8.93-9 4.923 0 8.93 4.023 8.93 9 0 4.96-4.006 8.982-8.93 8.982-4.94 0-8.93-4.023-8.93-8.982zm53.59 149.798c0-4.96 4.006-8.982 8.93-8.982 4.94 0 8.93 4.023 8.93 8.982 0 4.976-3.988 9-8.93 9-4.923 0-8.93-4.023-8.93-9z" fill="#000" /></g></motion.svg>
                            </AnimatePresence>
                            {python_icon && <Progressbar percentage="92%" percentage_val={92} color="#ffe873" />}
                        </div>
                    </div>
                    <div className='icon_column'>
                        <div className={`icon_container javascript c_1 ${show_all_titles}`} onMouseEnter={() => onMouseEnter(3)} onMouseLeave={() => onMouseLeave(3)}>
                            {js_icon && <PointerLine />}
                            <AnimatePresence>
                                <motion.svg
                                    variants={variants}
                                    animate={(js_icon === false && randNum === 3) ? 'jump' : 'doNothing'}
                                    id="icon_jump_js" className='icon' xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 256 256" preserveAspectRatio="xMinYMin meet"><path d="M0 0h256v256H0V0z" fill="#F7DF1E" /><path d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247L210.29 147.43c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574" fill='#000' /></motion.svg>
                            </AnimatePresence>
                            {js_icon && <Progressbar percentage="90%" percentage_val={90} color="#F7DF1E" />}
                        </div>
                        <div className={`icon_container java ${show_all_titles}`} onMouseEnter={() => onMouseEnter(4)} onMouseLeave={() => onMouseLeave(4)}>
                            {java_icon && <PointerLine />}
                            <AnimatePresence>
                                <motion.svg
                                    variants={variants}
                                    animate={(java_icon === false && randNum === 4) ? 'jump' : 'doNothing'}
                                    id="icon_jump_java" className='icon' xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 32 32" fill="none"> <path d="M16.0497 8.44062C22.6378 3.32607 19.2566 0 19.2566 0C19.7598 5.28738 13.813 6.53583 12.2189 10.1692C11.1312 12.6485 12.9638 14.8193 16.0475 17.5554C15.7749 16.9494 15.3544 16.3606 14.9288 15.7645C13.4769 13.7313 11.9645 11.6132 16.0497 8.44062Z" fill="#E76F00" /> <path d="M17.1015 18.677C17.1015 18.677 19.0835 17.0779 17.5139 15.3008C12.1931 9.27186 23.3333 6.53583 23.3333 6.53583C16.5317 9.8125 17.5471 11.7574 19.2567 14.1202C21.0871 16.6538 17.1015 18.677 17.1015 18.677Z" fill="#E76F00" /> <path d="M22.937 23.4456C29.0423 20.3258 26.2195 17.3278 24.2492 17.7317C23.7662 17.8305 23.5509 17.9162 23.5509 17.9162C23.5509 17.9162 23.7302 17.64 24.0726 17.5204C27.9705 16.1729 30.9682 21.4949 22.8143 23.6028C22.8143 23.6029 22.9088 23.5198 22.937 23.4456Z" fill="#5382A1" /> <path d="M10.233 19.4969C6.41312 18.9953 12.3275 17.6139 12.3275 17.6139C12.3275 17.6139 10.0307 17.4616 7.20592 18.8043C3.86577 20.3932 15.4681 21.1158 21.474 19.5625C22.0984 19.1432 22.9614 18.7798 22.9614 18.7798C22.9614 18.7798 20.5037 19.2114 18.0561 19.4145C15.0612 19.6612 11.8459 19.7093 10.233 19.4969Z" fill="#5382A1" /> <path d="M11.6864 22.4758C9.55624 22.2592 10.951 21.2439 10.951 21.2439C5.43898 23.0429 14.0178 25.083 21.7199 22.8682C20.9012 22.5844 20.3806 22.0653 20.3806 22.0653C16.6163 22.7781 14.441 22.7553 11.6864 22.4758Z" fill="#5382A1" /> <path d="M12.6145 25.6991C10.486 25.4585 11.7295 24.7474 11.7295 24.7474C6.72594 26.1222 14.7729 28.9625 21.1433 26.2777C20.0999 25.8787 19.3528 25.4181 19.3528 25.4181C16.5111 25.9469 15.1931 25.9884 12.6145 25.6991Z" fill="#5382A1" /> <path d="M25.9387 27.3388C25.9387 27.3388 26.8589 28.0844 24.9252 28.6612C21.2481 29.7566 9.62093 30.0874 6.39094 28.7049C5.22984 28.2082 7.40723 27.5189 8.09215 27.3742C8.80646 27.2219 9.21466 27.2503 9.21466 27.2503C7.9234 26.3558 0.868489 29.0067 5.63111 29.7659C18.6195 31.8372 29.3077 28.8331 25.9387 27.3388Z" fill="#5382A1" /> <path d="M28 28.9679C27.7869 31.6947 18.7877 32.2683 12.9274 31.8994C9.10432 31.6583 8.33812 31.0558 8.32691 31.047C11.9859 31.6402 18.1549 31.7482 23.1568 30.8225C27.5903 30.0016 28 28.9679 28 28.9679Z" fill="#5382A1" /> </motion.svg>
                            </AnimatePresence>
                            {java_icon && <Progressbar percentage="70%" percentage_val={70} color="#E76F00" />}
                        </div>
                        <div className={`icon_container sql c_3 ${show_all_titles}`} onMouseEnter={() => onMouseEnter(5)} onMouseLeave={() => onMouseLeave(5)}>
                            {sql_icon && <PointerLine />}
                            <AnimatePresence>
                                <motion.svg
                                    variants={variants}
                                    animate={(sql_icon === false && randNum === 5) ? 'jump' : 'doNothing'}
                                    id="icon_jump_sql" className='icon' xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="-8.78 0 70 70">
                                    <path d="m 852.97077,1013.9363 c -6.55238,-0.4723 -13.02857,-2.1216 -17.00034,-4.3296 -2.26232,-1.2576 -3.98589,-2.8032 -4.66223,-4.1807 l -0.4024,-0.8196 0,-25.70807 0,-25.7081 0.31843,-0.6465 c 1.42297,-2.889 5.96432,-5.4935 12.30378,-7.0562 2.15195,-0.5305 5.2586,-1.0588 7.79304,-1.3252 2.58797,-0.2721 9.44765,-0.2307 12.02919,0.073 6.86123,0.8061 12.69967,2.6108 16.29768,5.0377 1.38756,0.9359 2.81137,2.4334 3.29371,3.4642 l 0.41358,0.8838 -0.0354,25.6303 -0.0354,25.63047 -0.33195,0.6744 c -0.18257,0.3709 -0.73406,1.1007 -1.22553,1.6216 -2.99181,3.1715 -9.40919,5.5176 -17.8267,6.5172 -1.71567,0.2038 -9.16916,0.3686 -10.92937,0.2417 z m 12.07501,-22.02839 c -0.0252,-0.0657 -1.00472,-0.93831 -2.17671,-1.93922 -1.17199,-1.00091 -2.18138,-1.86687 -2.24309,-1.92436 -0.0617,-0.0575 0.15481,-0.26106 0.48117,-0.45237 0.32635,-0.19131 0.95163,-0.7235 1.3895,-1.18265 1.2805,-1.34272 1.88466,-3.00131 1.88466,-5.17388 0,-2.1388 -0.65162,-3.8645 -1.95671,-5.1818 -1.31533,-1.3278 -2.82554,-1.8983 -5.02486,-1.8983 -3.39007,0 -5.99368,1.9781 -6.82468,5.1851 -0.28586,1.1031 -0.28432,3.33211 0.003,4.31023 0.74941,2.55136 2.79044,4.40434 5.33062,4.83946 0.8596,0.14724 0.97605,0.21071 1.5621,0.85144 0.34829,0.38078 1.06301,1.14085 1.58827,1.68904 l 0.95501,0.9967 2.53878,0 c 1.39633,0 2.51816,-0.0537 2.49296,-0.11939 z m -8.70653,-7.10848 c -0.61119,-0.31868 -0.84225,-0.56599 -1.19079,-1.27453 -0.26919,-0.54724 -0.31522,-0.85851 -0.31824,-2.15197 -0.003,-1.3143 0.0388,-1.5983 0.31987,-2.169 0.45985,-0.9339 1.09355,-1.376 2.07384,-1.4469 1.36454,-0.099 2.15217,0.5707 2.56498,2.1801 0.50612,1.97321 -0.0504,4.07107 -1.26471,4.76729 -0.63707,0.36527 -1.58737,0.40659 -2.18495,0.095 z m -11.25315,3.66269 c 2.66179,-0.5048 4.1728,-2.0528 4.1728,-4.27495 0,-1.97137 -0.97548,-3.12004 -3.6716,-4.32364 -1.54338,-0.689 -2.10241,-1.1215 -2.10241,-1.6268 0,-0.4188 0.53052,-0.8777 1.14813,-0.993 0.60302,-0.1126 2.20237,0.1652 3.14683,0.5467 l 0.79167,0.3198 0,-1.7524 0,-1.7525 -0.85923,-0.1906 c -0.53103,-0.1178 -1.64689,-0.1885 -2.92137,-0.1849 -1.80528,0 -2.15881,0.044 -2.83818,0.3138 -1.98445,0.7878 -2.92613,2.1298 -2.91107,4.1485 0.0141,1.8898 1.01108,3.06864 3.49227,4.12912 1.46399,0.62572 2.05076,1.10218 2.05076,1.66522 0,1.1965 -1.99362,1.34375 -4.10437,0.30315 -0.57805,-0.28498 -1.09739,-0.54137 -1.1541,-0.56976 -0.0567,-0.0284 -0.10311,0.79023 -0.10311,1.81917 0,1.86239 0.002,1.87137 0.33919,1.99974 1.26979,0.48278 4.07626,0.69787 5.52379,0.42335 z m 30.4308,-1.72766 0,-1.58098 -2.40584,0 -2.40583,0 0,-5.43035 0,-5.4303 -2.13089,0 -2.13088,0 0,7.0113 0,7.01131 4.53672,0 4.53672,0 0,-1.58098 z m -14.84745,-27.70503 c 4.23447,-0.2937 7.4086,-0.8482 10.20178,-1.7821 2.78264,-0.9304 4.42643,-2.0562 4.79413,-3.2834 0.14166,-0.4729 0.13146,-0.6523 -0.0665,-1.1708 -0.88775,-2.3245 -5.84694,-4.1104 -13.42493,-4.8345 -3.24154,-0.3098 -9.13671,-0.2094 -12.22745,0.2081 -4.71604,0.6372 -8.54333,1.8208 -10.2451,3.1683 -3.44251,2.726 0.19793,5.7242 8.66397,7.1354 3.67084,0.6119 8.42674,0.828 12.30414,0.559 z" fill="#00bcf2" transform="translate(-830.906 -943.981)" />
                                </motion.svg>
                            </AnimatePresence>
                            {sql_icon && <Progressbar percentage="86%" percentage_val={86} color="#00bcf2" />}
                        </div>
                    </div>
                    <div className='icon_column'>
                        <div className={`icon_container html_ c_1 ${show_all_titles}`} onMouseEnter={() => onMouseEnter(6)} onMouseLeave={() => onMouseLeave(6)}>
                            {html_icon && <PointerLine />}
                            <AnimatePresence>
                                <motion.svg
                                    variants={variants}
                                    animate={(html_icon === false && randNum === 6) ? 'jump' : 'doNothing'}
                                    id="icon_jump_html" className='icon' xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 32 32" fill="none"> <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#E44D26" /> <path d="M26 5H16V29.5L24 27L26 5Z" fill="#F16529" /> <path d="M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z" fill="black" /></motion.svg>
                            </AnimatePresence>
                            {html_icon && <Progressbar percentage="97%" percentage_val={97} color="#E44D26" />}
                        </div>
                        <div className={`icon_container css_ ${show_all_titles}`} onMouseEnter={() => onMouseEnter(7)} onMouseLeave={() => onMouseLeave(7)}>
                            {css_icon && <PointerLine />}
                            <AnimatePresence>
                                <motion.svg
                                    variants={variants}
                                    animate={(css_icon === false && randNum === 7) ? 'jump' : 'doNothing'}
                                    id="icon_jump_css" className='icon' xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 32 32" fill="none"> <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8" /> <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD" /> <path d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z" fill="black" /> </motion.svg>
                            </AnimatePresence>
                            {css_icon && <Progressbar percentage="95%" percentage_val={95} color="#1172B8" />}
                        </div>
                        <div className={`icon_container git_ c_3 ${show_all_titles}`} onMouseEnter={() => onMouseEnter(8)} onMouseLeave={() => onMouseLeave(8)}>
                            {git_icon && <PointerLine />}
                            <AnimatePresence>
                                <motion.svg
                                    variants={variants}
                                    animate={(git_icon === false && randNum === 8) ? 'jump' : 'doNothing'}
                                    id="icon_jump_git" className='icon' xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 32 32" fill="none"><path d="M2.58536 17.4132C1.80488 16.6327 1.80488 15.3673 2.58536 14.5868L14.5868 2.58536C15.3673 1.80488 16.6327 1.80488 17.4132 2.58536L29.4146 14.5868C30.1951 15.3673 30.1951 16.6327 29.4146 17.4132L17.4132 29.4146C16.6327 30.1951 15.3673 30.1951 14.5868 29.4146L2.58536 17.4132Z" fill="#EE513B" /><path d="M12.1489 5.06152L10.9336 6.27686L14.0725 9.41577C13.9455 9.68819 13.8746 9.99201 13.8746 10.3124C13.8746 11.222 14.4461 11.9981 15.2496 12.3012V19.9798C14.4461 20.2829 13.8746 21.059 13.8746 21.9686C13.8746 23.1422 14.826 24.0936 15.9996 24.0936C17.1732 24.0936 18.1246 23.1422 18.1246 21.9686C18.1246 21.144 17.6549 20.429 16.9684 20.0768V12.3117L19.9689 15.3122C19.8481 15.5791 19.7809 15.8754 19.7809 16.1874C19.7809 17.361 20.7323 18.3124 21.9059 18.3124C23.0795 18.3124 24.0309 17.361 24.0309 16.1874C24.0309 15.0138 23.0795 14.0624 21.9059 14.0624C21.6778 14.0624 21.4582 14.0983 21.2522 14.1648L18.0297 10.9423C18.0914 10.7433 18.1246 10.5317 18.1246 10.3124C18.1246 9.13878 17.1732 8.18738 15.9996 8.18738C15.7803 8.18738 15.5688 8.22061 15.3697 8.2823L12.1489 5.06152Z" fill="black" /></motion.svg>
                            </AnimatePresence>
                            {git_icon && <Progressbar percentage="83%" percentage_val={83} color="#EE513B" />}
                        </div>
                    </div>
                </div>
                <div className='expertice'>
                    <div className='skills_and_expertice shine_title'>Skills and Expertice</div>
                    <div className='expertice_paragraph'>
                        <h2 className='expertice_header'>Expertice</h2>
                        <p className='paragraph'>something...</p>
                    </div>
                    <div className='tech_stack'>
                        <div className='stack_title'>Tech Stack</div>
                        <br></br>
                        <div className='stack_icon_container'>
                            <div className='icon_container react_icon'><FaReact /></div>
                            <div className='icon_container vuejs'><FaVuejs /></div>
                            <div className='icon_container bulma'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 256 373"><path fill="white" d="M0 256L23.273 93.091L116.364 0l116.363 116.364l-69.818 69.818L256 279.273l-139.636 93.091z" /></svg>
                            </div>
                            <div className='icon_container flask'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32" preserveAspectRatio="xMidYMid"><path d="M9.563 26.873c-1.22-.96-2.52-1.878-3.408-3.172-1.87-2.283-3.31-4.925-4.294-7.703-.595-1.806-.8-3.743-1.566-5.48-.802-1.26.138-2.64 1.52-3.04.615-.118 1.696-.7.39-.284-1.17.858-1.283-.78-.083-.884.82-.11 1.12-.78.84-1.382-.88-.574 2.132-1.203.616-2.06C2 1.168 5.786.84 4.852 2.774 4.63 4.26 7.498 2.5 6.832 4.218c.677.825 2.534.188 2.487 1.345.986.068 1.324.897 2.25.96.96.433 2.697.774 3.023 1.855-.95.753-3.153-1.555-3.26.53.288 3.08.214 6.252 1.34 9.185.533 1.775 1.825 3.173 2.99 4.556 1.117 1.354 2.63 2.308 4.17 3.11 1.352.638 2.81 1.06 4.283 1.326.597-.457 1.653-2.156 2.584-1.44.045.806-1.85 1.684-.09 1.595 1.035-.312 1.752.8 2.603-.204.785.93 3.26-.593 2.703 1.306-.755.487-1.856.193-2.612.863-1.247-.623-2.24.557-3.62.408-1.533.275-3.092.385-4.646.387-2.55-.2-5.153-.286-7.578-1.174-1.367-.397-2.7-1.175-3.9-1.954zm2.153.933c1.334.576 2.64 1.184 4.1 1.368 2.32.322 4.715.82 7.043.366-1.054-.476-2.143.185-3.193-.34-1.26.27-2.6-.07-3.9-.237-1.455-.648-3.026-1.094-4.388-1.936-1.703-.622.88.798 1.34.913 1.064.604-1.17-.3-1.486-.56-.892-.5-1.005-.396-.088.112l.56.314zm-2.54-1.794c1.293.48-.006-.91-.597-.83-.262-.455-1.003-.743-.48-.987-.94.326-.984-1.24-1.425-1.016-.994-.314-.387-1.426-1.57-2.11-.108-.72-1.176-1.343-1.516-2.428-.15-.556-1.207-2.15-.558-.666.552 1.43 1.524 2.653 2.334 3.875.628 1.164 1.37 2.38 2.514 3.107.386.37.758.937 1.302 1.053zm-3.724-4.09c.045-.195.236.422 0 0zm5.273 4.663c.286-.128-.412-.162 0 0zm.7.256c-.073-.353-.32.198 0 0zm.88.366c.418-.398-.645-.25 0 0zm1.506.84c.254-.375-.813-.14 0 0zm-2.89-2.015c.65-.42-.84-.006 0 0zm.66.33c-.02-.222-.235.1 0 0zm3.293 2.056c.53.334 3.092.732 1.488.137-.27.056-2.975-.766-1.488-.137zm-5.228-4.072c-.05-.222-.822-.246 0 0zm1.533.894c.4-.28-.828-.215 0 0zm1.3.8c.573-.216-.928-.217 0 0zM9.02 23.665c.62.476 2.506.06.95-.284-.707-.377-2.3-.635-1.214.227l.263.057zm4.32 2.637c.26-.44-1.086-.252 0 0zm-1.313-1.043c1.52.43-1.277-.96-.375-.16l.2.09.175.068zm2.632 1.52c1.44.014-1.3-.2 0 0zm-6.193-3.947c-.056-.268-.355.022 0 0zm8.627 5.312c.038-.484-.47.36 0 0zm-6.17-3.81c-.087-.255-.45-.01 0 0zm-2.32-1.67c.826-.05-1.13-.364 0 0zM5.856 20.89c-.103-.396-.898-.712 0 0zm7.212 4.577c-.15-.173-.07.037 0 0zm4.488 2.755c-.014-.264-.244.1 0 0zm-4.885-3.165c.08-.34-.705-.103 0 0zm-3.344-2.12c.615-.065-.985-.415 0 0zm5.656 3.515c.958-.38-.933-.185 0 0zm-2.942-1.997c1.103.142-1.313-.75-.243-.08l.243.08zm3.835 2.358c1.03-.615.69 1.443 1.748.174 1.043-.762-.9.942.384.136.93-.622 2.303.295 3.17.593.624-.03 1.23.54 1.87.193 1.23-.332-2.408-.492-1.454-1.08-1.126.328-1.958-.39-2.513-1.112-1.264-.292-2.724-.938-3.355-2.056-.257-.42.37.06-.222-.627-.76-.677-1.14-1.446-1.652-2.27-.61-.325-.683-1.284-.744-.032.005-.79-.737-1.323-.92-1.102-.003-.76.795-.38.236-.942-.12-.79-.516-1.61-.634-2.502-.185-.43-.026-1.35-.63-.377-.22 1.027-.073-1.262.27-.508.45-.77-.162-.68-.186-.573.293-.65.186-1.572-.077-1.22.156-.69.247-2.535-.233-2.208.29-.72.552-3.297-.712-2.315-.512.007-1.398.186-1.817.394 1.313.724-.132.262-.668.146-.07.67-.6.38-1.26.387 1.058.13-.515 1.08-1.12.712-.788.376.68 1.316.015 1.607.082.437-1.207-.158-1.106.854-.764-.322-.105 1.2.278.685 1.3.352.915 1.154.948 1.917-.212.444-1.046-1.044-.186-.975-.68-1.103-.75-.4-1.315.114-.13.037 1.44.73.454 1.07.867.134.892.893 1.068 1.372.52.543.413-.6 1.037.053-.395-.58-2.09-1.637-.725-1.3-.007-.584-.247-1.056.172-1.045.415-.75-.434 1.85.5.896.258-.113.323-.75.787.06.674.664.244 1.144-.708.536.17.578 1.273.784 1.065 1.687.22.795.527.502.795.456.2.772.33.204.34-.163.962.206.736.775 1.038 1.172.663.3-.95-2.028.19-.7 1.197 1.08.45 1.533-.625 1.36.68-.055.9.92 1.75.885.776.37 1.3 1.787-.036 1.196-.463-.418-2.106-.934-.764-.14 1.238.574 2.222.916 3.416 1.637.854.6 1.223 1.308 1.547 1.447-.718.343-2.164-.274-1.1-.463-.67-.122-1.424-.46-.782.374.546.456 1.933.408 2.182.46-.21.464-.573.5.008.537-.648.346.208.4.268.597zm-1.326-3.744c-.395-.413-.497-1.185-.07-.513.22.088.7 1.263.07.513zM18.87 25.8c.246-.016.007.187 0 0zm-4.94-3.755c-.016-.624.142.48 0 0zm-.43-.577c-.497-.96.625.27 0 0zm-5.202-3.6c.292-.078.144.498 0 0zm4.14 2.244c.18-.673.2.564 0 0zm-2.925-2.034c-.206-.37.43.348 0 0zm2.51.804c-.47-1.053.334-.575.105.172l-.105-.172zm-4.328-2.886c-.2-.346-.557-1.36-.445-1.67.1.504 1.072 2.17.476.7-.658-1.24.787.402.936.712.07.307-.406-.084-.084.638-.588-.822-.347.454-.882-.37zm-1.337-.922c.055-.804.306.55 0 0zm.602.208c.287-.606.486.845 0 0zM5.5 14.182c-.498-.495-.858-.95.024-.307.34.013-.755-1.037.082-.334.88.16.434 1.443-.105.64zm.76-.02c.29-.287.154.282 0 0zm.468.15c-.44-.822.532.345 0 0zm-.93-.888c-1.448-1.29 1.82.673.236.24l-.236-.24zm4.148 2.41c-.627-.375-.167-2.644.047-1.093.61-.197-.034.802.42.792-.07.63-.275.857-.467.3zm1.534.907c.06-.684.13.468 0 0zm-.266-.264c.07-.292.006.344 0 0zM6.092 13c-.93-1.283 2.703 1.298.596.325-.22-.058-.485-.078-.596-.325zm2.955 1.566c-.088-1.08.196.18 0 0zm2.243 1.44c.173-.615.013.407 0 0zM6.235 12.51c.553-.118 2.3.97.695.31-.177-.196-.556-.107-.695-.31zm4.746 2.366c.06-1.105.33-.66.002.16l-.002-.16zm-4.335-2.75c.226-.33-.598-1.493.118-.417.3.246.897.412.38.516.815.72-.2.195-.497-.1zm4.1 2.406c.155-1.26.137.737 0 0zm-4.57-3.568c.172-.074.09.23 0 0zm1.07.637c.275-.578.508.644 0 0zm3.017 1.678c-.002-.22.057.323 0 0zm-.175-.386c-.418-1.033.4.547 0 0zm-.257-.678c-.07-.427.24.536 0 0zm.418-.68c-.288-.506.363-2.23.436-1.16-.303.834-.087 1.3.123.18.39-.88-.084 1.737-.56.98zm.43-2.566c.125-.154.028.185 0 0zM9.96 23.12c-.17-.15.022.094 0 0zm1.48.748c.823.212.82-.128.075-.23-.4-.372-1.662-.767-.532-.046.074.2.31.185.457.275zm-2.92-1.94c.453.34 1.707.958.646.13.358-.416-.685-.638-.34-.916-.88-.54-.695-.5-.078-.473-1.058-.473.153-.437.096-.68-.408-.08-2.026-.72-1.074.052-.968-.493-.23.184-.523.113-1-.27.88.754-.157.5.567.45 1.528 1.153.24.476-.17.244.922.615 1.2.8zm1.547.89c1.88.606-.923-.74 0 0zm7.92 4.798c.024-.374-.257.32 0 0zm.814.343c.434-.42.018.67.72-.103.007-.553-.02-.88-.806-.208-.217.12-.313.63.087.31zM5.878 19.84c-.133-.524-.934-.522 0 0zm.87.57c-.323-.535-1.152-.485 0 0zm4.946 2.983c.483.43 2.218.315.586.053-.24-.357-1.533-.27-.586-.053zm6.798 4.2c.743-.624-.72.278 0 0zm1.546 1.062c.005-.2-.32.087 0 0zm.003-.28c.823-.87-.797.05 0 0zM3.74 18.05c-.7-1-.436-1.45-1.112-2.267-.128-.625-1.16-2.043-.534-.54.574.88.744 2.24 1.646 2.81zm16.04 10.046c1.515-.978-.62-.426 0 0zm1.156.453c.76-.65-.48-.136 0 0zM5.62 18.735c.217-.323-.56-.042 0 0zm15.075 9.505c.734-.473-.17-.4-.133.043l.133-.043zm-9.962-6.28c-.025-.32-.388.027 0 0zm.615.354c-.196-.396-.3.062 0 0zm10.525 6.245c.94-.68-.57-.13-.197.13l.197-.13zm-.36-.174c.767-.642-.81.284 0 0zm1.84 1.225c.514-.344-.625-.11 0 0zm-17.26-11.11c.69.154 2.755 1.698 1.537.107-.624-.185-.25-1.71-.887-1.44.427.714.35 1.018-.546.568-1.127-.55-.633.272-.413.5-.3.07.397.26.31.266zm-3.14-2.48c.123-.51-1.137-2.81-.595-1.152.195.347.175 1.005.595 1.152zm5.766 3.555c-.356-.297-.017-.042 0 0zm.874.204c0-.54-.966-.22 0 0zm7.577 4.776c-.145-.37-.57-.008 0 0zm.364.266c-.054-.207-.2.04 0 0zm3.003 1.892c.29-.213-.36-.028 0 0zM4.52 16.422c.826-.32-.885-.228 0 0zM16.5 23.97c-.01-.535-.527.133 0 0zM4.193 15.66c.53-.18-.49-.118 0 0zm1.54.746c-.01-.176-.163.067 0 0zm18.788 11.52c.682-.138 2.238.347 2.49-.18-.83-.02-2.867-.585-2.963.134l.18.03.293.018zM6.223 16.53c.012-.542-.422-.02 0 0zm-4.05-2.81c-.184-1.032-.7-.156 0 0zm.965.243c.012-.332-.884-.298 0 0zm.552.27c-.16-.13-.124.163 0 0zm3.473 2.227c.164-.15-.387-.11 0 0zm-3.84-2.84c-.094-.78-1.12-.117 0 0zm-1.98-1.285c-.028-.36-.193.136 0 0zm.295-.222c-.048-.427-.253.054 0 0zm1.627.97c.688-.27-1.253-.56-.14-.05l.14.05zM25.043 26.54c.44-.404-.56-.125 0 0zm2.63 1.363c.177-.52-.445.07 0 0zM3.43 12.235c.073-.505-.546.1 0 0zm-2.316-1.55C.992 9.97 1.01 8.72 2.198 9.142c-1.587.316 1.1 1.974.76.664.668.033 1.306-.395.955.253C5.23 9.916 6.14 8.774 7.412 8.935c1-.132 2.072-.23 3.14-.63.877-.063 1.72-1.007 1.24-1.567-1.196-.1-2.448.048-3.77.312-1.465.304-2.795.883-4.273 1.13-1.44.194.29.533-.123.61-.75.26.897.436-.097.712-.614-.117-1.253-.328-.99-.975-1.38.18-2.593.752-1.502 2.156l.08.001zM4.442 9c.323-1.192 1.733.98.53.16-.143-.108-.38-.195-.53-.16zm.063-.578c.467-.347.248.195 0 0zm.593.01c.043-.548 1.358.3.217.197l-.217-.197zm.81-.326c.297-.347.086.307 0 0zm.208-.14c.494-.593 2.793-.38 1.1-.058-.45-.34-.797.2-1.1.058zm3-.463c-.074-1.62 1.492.575 0 0zm.852-.005c.31-.816 1.21-.328.145-.164.023.087-.032.422-.145.164zm-6.873 4.327c.93-.57-.987-.494 0 0zm.688.2c.326-.347-.7-.14 0 0zM1.757 10.57c.53-.41-.63-.155 0 0zm27.47 17.185c.015-.474-.406.213 0 0zm-2.79-1.905c.08-.545-.36.047 0 0zm3.56 2.09c.743.003 2.252-.23.635-.23-.254.04-1.48.03-.635.23zM4.39 11.673c.602-.04.94-.663-.117-.628-1.64-.17 1.446.562-.2.352-.222.147.314.316.327.275zm.53.268c-.063-.386-.186.205 0 0zm.63-1.676c.26-.324-.36-.087 0 0zm-2-3.344c1.074-.365 2.542-.775 3.05.18-.516-.62-.208-1.232.28-.324.69.918 1.034-.418.586-.726.51.634 1.09.934.342.04.815-.98-1.63.128-2.186.117-.267.12-2.76.636-2.07.713zm.63-1.205c.612-.462 2.118.275 1.152-.46-.095-.083-2.115.557-1.152.46zm2.232.092c.716.018-.31-.963.544-.518-.14-.458-.994-.543-1.412-.727-.236.418.48 1.25.867 1.245zm-1.84-2.026c.248-.336-.435.17 0 0zM5.48 4c1.155-.153-.294-.497-.233-.012L5.48 4zM3.776 2.67c-.813-1.062 1.53.178.703-.933-.696-.553-1.363.624-.703.933zm10.434 5.62c.373-.66-1.54-.89-.25-.234.118.04.092.28.25.234z" /></svg>
                            </div>
                            <div className='icon_container django'>
                                <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="100%" height="100%" viewBox="0 0 256 256" version="1.1" preserveAspectRatio="xMidYMid">
                                    <g>
                                        <rect fill="white" x="0" y="0" width="256" height="256" rx="28">

                                        </rect>
                                        <path d="M186.377012,94.197636 L186.377012,160.424478 C186.377012,183.243286 184.707519,194.187745 179.699037,203.649406 C175.060358,212.741266 168.937684,218.490548 156.323731,224.798721 L129.794937,212.183571 C142.410087,206.247593 148.531564,201.05481 152.427049,193.074749 C156.509231,184.91278 157.808923,175.451119 157.808923,150.593015 L157.808923,94.197636 L186.377012,94.197636 Z M140.928486,50.0787207 L140.928486,182.316986 C126.272844,185.099476 115.512688,186.212472 103.826231,186.212472 C68.9487718,186.212472 50.7686431,170.445031 50.7686431,140.205054 C50.7686431,111.079269 70.0629644,92.1583404 99.9295492,92.1583404 C104.567032,92.1583404 108.091519,92.5281423 112.359199,93.6411381 L112.359199,50.0787207 L140.928486,50.0787207 Z M102.713236,115.160254 C88.243093,115.160254 79.8944275,124.065418 79.8944275,139.647359 C79.8944275,154.860696 87.8720944,163.208164 102.527736,163.208164 C105.680028,163.208164 108.278215,163.022665 112.359199,162.467364 L112.359199,116.643052 C109.020212,115.531253 106.237722,115.160254 102.713236,115.160254 Z M186.377012,50.2307105 L186.377012,79.5419941 L157.808923,79.5419941 L157.808923,50.2307105 L186.377012,50.2307105 Z" fill="black">

                                        </path>
                                    </g>
                                </svg>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>);
}

export default Skills;