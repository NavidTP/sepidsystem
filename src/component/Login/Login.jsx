
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './login.css'
import { getLogin } from '../../services/AllApi';



const Login = () => {

    const [particlesConfig, setParticlesConfig] = useState(null);
    const [user, setUser] = useState({
        username: "",
        password: ""
    })

    const [validation, setValidation] = useState({
        username: true,
        password: true
    })

    let navigate = useNavigate();
    // Somewhere in your code, e.g. inside a handler:


    const [login, setlogin] = useState(false);


    useEffect(() => {
        const loadParticlesJS = () => {
            const script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js';
            script.onload = () => {
                if (window.particlesJS) {
                    setParticlesConfig({
                        particles: {
                            number: {
                                value: 85,
                                density: {
                                    enable: true,
                                    value_area: 500
                                }
                            }, "color": {
                                "value": "#1F8EA1",
                            },
                            "shape": {
                                "type": "circle",
                                "stroke": {
                                    "width": 0,
                                    "color": "#000000"
                                },
                                "polygon": {
                                    "nb_sides": 5
                                },
                                "image": {
                                    "width": 100,
                                    "height": 100
                                }
                            },
                            "opacity": {
                                "value": 0.9,
                                "random": false,
                                "anim": {
                                    "enable": false,
                                    "speed": 1,
                                    "opacity_min": 0.1,
                                    "sync": false
                                }
                            },
                            "size": {
                                "value": 3,
                                "random": true,
                                "anim": {
                                    "enable": false,
                                    "speed": 40,
                                    "size_min": 0.1,
                                    "sync": false
                                }
                            },
                            "line_linked": {
                                "enable": true,
                                "distance": 150,
                                "color": "#ffffff",
                                "opacity": 0.6,
                                "width": 1
                            },
                            "move": {
                                "enable": true,
                                "speed": 6,
                                "direction": "none",
                                "random": false,
                                "straight": false,
                                "out_mode": "out",
                                "attract": {
                                    "enable": false,
                                    "rotateX": 600,
                                    "rotateY": 1200
                                }
                            }

                        },
                        "interactivity": {
                            "detect_on": "canvas",
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "repulse"
                                },
                                "onclick": {
                                    "enable": true,
                                    "mode": "push"
                                },
                                "resize": true
                            },
                            "modes": {
                                "grab": {
                                    "distance": 400,
                                    "line_linked": {
                                        "opacity": 1
                                    }
                                },
                                "bubble": {
                                    "distance": 400,
                                    "size": 40,
                                    "duration": 2,
                                    "opacity": 8,
                                    "speed": 3
                                },
                                "repulse": {
                                    "distance": 100
                                },
                                "push": {
                                    "particles_nb": 4
                                },
                                "remove": {
                                    "particles_nb": 2
                                }
                            }
                        },
                        "retina_detect": true,
                        "config_demo": {
                            "hide_card": false,
                            "background_color": "#b61924",
                            "background_image": "",
                            "background_position": "50% 50%",
                            "background_repeat": "no-repeat",
                            "background_size": "cover"
                        }

                    });
                }
            };
            document.body.appendChild(script);
        };

        loadParticlesJS();
    }, []);

    useEffect(() => {
        if (particlesConfig) {
            window.particlesJS('particles-js', particlesConfig);
        }
    }, [particlesConfig]);



    const loginHandler = (e) => {


        setUser({ ...user, [e.target.name]: e.target.value })

    }

    const buttonHandlerr = () => {



        var valid = { ...validation }

        if (user.password == "") {
            valid.password = false
        } else {
            valid.password = true
        }

        if (user.username == "") {
            valid.username = false
        } else {
            valid.username = true
        }

        

        if (validation.username !== "", validation.password !== "") {
        
            getLogintoserver()
        }



    }




    const getLogintoserver = async () => {



        var send_data = 
           `{ "captcha":"",
       "verificationCode":"",
         "applicationId": 3,
         "userName":"${user.username}",
         "password":"${user.password}"}`



       try {
           const { data } = await getLogin(send_data);
          
           if(data.token !==""){
            localStorage.setItem('token', data.token);
            navigate("/Home"); 
           }

       } catch (err) {

       }

   };


    return (
        <div>
            <div className="h-screen w-screen custom-background">
                <div id="particles-js" className="particles-container position-relative">

                    <div className='login-contnet-back position-absolute right-0 py-4 px-9 flex justify-center align-items-center'>

                        <div className='flex justify-center items-center flex-grow-1'>
                            <img className='h-20 w-30 ml-5 custom-logo-login' src={require("../../assets/img/icon/sepid-logo.png")} alt="" />

                            <div className='mr-3'>


                                <input className='input-back d-block text-xs pr-3 rounded-full mx-auto' type="text" placeholder='نام کاربری' name="username" value={user.username} onChange={loginHandler} style={{ backgroundColor: "#131314e1 !important", backgroundColor: "#084F83 !important" }} />


                                {!validation.username ? (<span style={{ color: "red", fontSize: 12 }}>نام کاربری وارد نشده</span>) : null}


                                <div className='mt-3 mx-auto'>

                                    <input className='input-back text-xs pr-3 rounded-full ' type="text" placeholder='رمز عبور' name="password" value={user.password} onChange={loginHandler} />
                                </div>

                                {!validation.password ? (<span style={{ color: "red", fontSize: 12 }}>رمز عبور وارد نشده</span>) : null}


                                <div className=' btn-back m-auto mt-4 flex justify-center align-items-center rounded-full px-3 py-1 cursor-pointer' onClick={buttonHandlerr}>
                                    <span className='text-white' style={{ marginTop: -5, fontSize: 12 }}>ورود</span>

                                </div>

                            </div>

                        </div>

                    </div>



                </div>
            </div>
        </div>
    )
}

export default Login;