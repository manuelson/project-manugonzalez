import 'bootstrap/dist/css/bootstrap.min.css'
import {RouterProvider} from "react-router-dom"
import {Router} from "./components/Router/Index.jsx"
import avatar from './assets/avatar-manu-memoji.png';
import 'animate.css';

function App() {

    const handleMenu = (e) => {
        console.log('test')
    }

    return (
      <>
          <header className="mt-4 w-90 justify-content-center d-flex justify-content-between container" onClick={handleMenu}>
              <a href="#" >
                  <svg
                      className="logo rounded-5"
                      viewBox="0 0 32 32"
                      id="icon"
                      xmlns="http://www.w3.org/2000/svg"
                  ><path className="cls-1" d="M4,4V28H28V4ZM23.9385,9.6865,22.6514,10.92a.3766.3766,0,0,0-.1431.3613v9.0674a.3765.3765,0,0,0,.1431.3613l1.257,1.2339v.271h-6.323v-.271L18.8877,20.68c.1279-.128.1279-.1656.1279-.3609V12.99l-3.62,9.1958H14.906L10.6907,12.99v6.1631a.8505.8505,0,0,0,.2334.7071l1.6936,2.0547v.2709H7.8154v-.2709L9.509,19.86a.82.82,0,0,0,.2183-.7071V12.0264A.6231.6231,0,0,0,9.5239,11.5L8.0186,9.6865v-.271h4.6743l3.613,7.9239,3.1765-7.9239h4.4561Z"/><path id="inner-path" className="cls-2" d="M9.7273,12.0266A.6246.6246,0,0,0,9.524,11.5L8.0186,9.6863V9.4154H12.693l3.613,7.9238,3.1764-7.9238h4.4561v.2709L22.6513,10.92a.3763.3763,0,0,0-.143.3612v9.0676a.3763.3763,0,0,0,.143.3612l1.2571,1.2341v.2709H17.5856v-.2709L18.8878,20.68c.1279-.1279.1279-.1656.1279-.3612V12.99l-3.62,9.1955h-.4893L10.6907,12.99v6.1629a.8506.8506,0,0,0,.2334.7074l1.6936,2.0543v.2709H7.8154v-.2709L9.509,19.86a.82.82,0,0,0,.2183-.7074Z"/><rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" className="cls-2"/></svg>
              </a>
              <div className="d-flex gap-3">
                  <button className="rounded-circle button-menu align-items-center justify-content-center d-flex" onClick={handleMenu}>
                      <svg
                          className="icon-menu"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                      >
                          <circle cx="12" cy="12" r="5" stroke="#FFFFFF" strokeWidth="1.5"/>
                          <path d="M12 2V4" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round"/>
                          <path d="M12 20V22" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round"/>
                          <path d="M4 12L2 12" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round"/>
                          <path d="M22 12L20 12" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round"/>
                          <path d="M19.7778 4.22266L17.5558 6.25424" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round"/>
                          <path d="M4.22217 4.22266L6.44418 6.25424" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round"/>
                          <path d="M6.44434 17.5557L4.22211 19.7779" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round"/>
                          <path d="M19.7778 19.7773L17.5558 17.5551" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                  </button>
                  <button className="rounded-circle button-menu align-items-center justify-content-center d-flex">
                      <svg
                          className="icon-menu"
                          viewBox="0 0 24 24" fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                      >
                          <path d="M4 6H20M4 12H20M4 18H20" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                  </button>
              </div>
          </header>
          <main className="mt-5">
              <section className="d-md-flex header-banner justify-content-center">
                  <img src={avatar} alt="avatar" className="avatar-banner" />
                  <div className="mx-5">
                      <h1 className="mb-2 title">Manu
                          <span className="text-advice"> Gonzalez</span>,
                          <br /> full-stack developer
                      </h1>
                      <p className="text-grey justify-content-around text-banner">
                          +11 years of experience in web development.
                          <a className="text-advice" target="_blank" href="https://php.net/"> Php</a>,
                          <a className="text-advice" target="_blank" href="https://reactjs.org/"> React.js</a> and
                          <a className="text-advice" target="_blank" href="https://getbootstrap.com/"> Bootstrap CSS</a>
                      </p>
                  </div>
              </section>
              <section id="pages" className="container mt-5">
                  <h2 className="h6">
                      Pages
                  </h2>
                  <hr />
                      <div className="d-md-flex nav-cards gap-4 ">
                          <a target="_self" className="p-4 rounded-3 animate__animated  animate__fadeInUp" href="/blog">
                              <h3 className="h6">Blog</h3>
                              <p className="">Read what I share</p>
                          </a>
                          <a target="_self"  className="p-4 rounded-3 animate__animated  animate__fadeInUp card-delay-1" href="/portfolio">
                              <h3 className="h6">Portfolio</h3>
                              <p>
                                  Projects, experiences knowledge
                              </p>
                          </a>
                      </div>
                      <div className="d-md-flex nav-cards gap-4 mt-4">
                          <a target="_self" className="p-4 rounded-3 animate__animated  animate__fadeInUp card-delay-2" href="/blog">
                              <h3 className="h6">Blog</h3>
                              <p className="">Read what I share with the world</p>
                          </a>
                          <a target="_self"  className="p-4 rounded-3 animate__animated  animate__fadeInUp card-delay-3" href="/portfolio">
                              <h3 className="h6">Let's talk</h3>
                              <p>
                                  Any questions?
                              </p>
                          </a>
                      </div>
              </section>
              <section id="skills" className="container mt-5">
                  <h2 className="h6">
                      Skills
                  </h2>
                  <hr />
                  <ul className="row gap-3 mx-0 my-0">
                      <li className="skill-card rounded-3 p-3 col">
                            <svg
                                viewBox="0 0 25 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-shrink-0 justify-content-center react-bg p-1 rounded-2"
                            ><g fill="#61DAFB" width="25" height="25"><path d="M23.866 12.448c0-1.474-1.886-2.871-4.776-3.737.667-2.885.37-5.18-.936-5.915a2.065 2.065 0 00-1.038-.254v1.012c.213 0 .385.04.528.118.63.353.904 1.7.69 3.433-.05.426-.134.875-.236 1.334a22.89 22.89 0 00-2.941-.495 22.239 22.239 0 00-1.928-2.268c1.51-1.374 2.928-2.127 3.892-2.127V2.538c-1.274 0-2.942.889-4.628 2.43-1.686-1.532-3.354-2.412-4.628-2.412v1.011c.96 0 2.381.749 3.891 2.114a21.536 21.536 0 00-1.913 2.263 22.053 22.053 0 00-2.946.5 13.426 13.426 0 01-.24-1.316c-.219-1.733.05-3.08.676-3.438.138-.082.32-.118.532-.118V2.56a2.1 2.1 0 00-1.047.254c-1.301.734-1.593 3.025-.922 5.9-2.88.871-4.757 2.264-4.757 3.733 0 1.474 1.885 2.871 4.776 3.737-.667 2.885-.37 5.18.936 5.915.3.172.653.254 1.042.254 1.274 0 2.942-.89 4.628-2.431 1.686 1.533 3.354 2.412 4.627 2.412a2.1 2.1 0 001.047-.254c1.302-.734 1.594-3.025.922-5.9 2.872-.867 4.748-2.264 4.748-3.733zm-6.032-3.025a20.154 20.154 0 01-.625 1.791 24.54 24.54 0 00-1.274-2.15c.658.096 1.292.214 1.9.359zm-2.121 4.83a24.076 24.076 0 01-1.117 1.733 24.64 24.64 0 01-4.178.004 23.454 23.454 0 01-2.085-3.529 24.092 24.092 0 012.075-3.542 24.617 24.617 0 014.179-.004c.384.54.76 1.116 1.12 1.723.353.595.673 1.198.964 1.805a25.182 25.182 0 01-.958 1.81zm1.496-.59c.25.608.463 1.216.639 1.806a21.18 21.18 0 01-1.908.363 25.047 25.047 0 001.269-2.168zm-4.697 4.84c-.431-.436-.862-.92-1.288-1.451.417.018.843.031 1.274.031.435 0 .866-.009 1.287-.031-.417.53-.847 1.015-1.274 1.45zm-3.447-2.671a21.334 21.334 0 01-1.9-.359c.172-.585.385-1.188.626-1.791.19.362.39.725.607 1.088.218.363.44.717.667 1.062zm3.423-9.439c.431.435.862.92 1.288 1.451a29.29 29.29 0 00-1.274-.031c-.435 0-.866.009-1.288.031.417-.53.848-1.016 1.274-1.451zM9.06 9.064a24.949 24.949 0 00-1.269 2.164 19.156 19.156 0 01-.64-1.805c.608-.14 1.247-.263 1.91-.359zm-4.192 5.679c-1.64-.685-2.7-1.583-2.7-2.295s1.06-1.615 2.7-2.295a14.47 14.47 0 011.283-.458c.264.889.612 1.814 1.043 2.762a21.186 21.186 0 00-1.029 2.749c-.458-.141-.894-.295-1.297-.463zm2.492 6.481c-.63-.354-.903-1.7-.69-3.433.051-.427.134-.875.236-1.334.908.218 1.9.386 2.942.495a22.242 22.242 0 001.927 2.267c-1.51 1.375-2.928 2.128-3.891 2.128a1.125 1.125 0 01-.524-.123zm10.988-3.456c.218 1.733-.05 3.08-.676 3.438-.139.082-.32.118-.533.118-.959 0-2.38-.748-3.89-2.114a21.527 21.527 0 001.912-2.263 22.048 22.048 0 002.946-.499c.107.458.19.898.241 1.32zm1.784-3.025a14.44 14.44 0 01-1.283.458 21.491 21.491 0 00-1.043-2.762c.427-.944.77-1.864 1.029-2.749.458.141.894.295 1.301.463 1.64.685 2.701 1.583 2.701 2.295-.005.712-1.065 1.615-2.705 2.295z"></path><path d="M12.498 14.52c1.169 0 2.117-.927 2.117-2.072s-.948-2.073-2.117-2.073c-1.17 0-2.117.928-2.117 2.073s.947 2.073 2.117 2.073z"></path></g></svg>
                          <span className="justify-content-center px-3">React</span>

                      </li>
                      <li className="skill-card rounded-3 p-3 col">
                          <svg
                              className="flex-shrink-0 justify-content-center react-bg p-2 rounded-2"
                              width="35px"
                              height="35px"
                              viewBox="0 0 256 256"
                              xmlns="http://www.w3.org/2000/svg"
                              preserveAspectRatio="xMinYMin meet">
                              <path d="M0 0h256v256H0V0z" fill="#F7DF1E"/><path d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247L210.29 147.43c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574"/></svg>
                          <span className="justify-content-center px-3">Javascript</span>
                      </li>
                      <li className="skill-card rounded-3 p-3 col">
                          <svg viewBox="0 0 24 24"
                               fill="none"
                               xmlns="http://www.w3.org/2000/svg"
                               className="flex-shrink-0 justify-content-center react-bg p-2 rounded-2"
                          ><path d="M0 0h24v24H0V0z" fill="#fff"></path><path d="M0 12v12h24V0H0v12zm19.34-.956c.61.152 1.075.423 1.502.865.221.236.549.667.575.77.008.03-1.036.73-1.669 1.123-.022.015-.114-.083-.217-.236-.309-.45-.632-.644-1.128-.678-.727-.05-1.2.332-1.192.967a.88.88 0 00.103.45c.16.332.457.53 1.39.934 1.718.739 2.453 1.226 2.91 1.92.51.773.625 2.008.278 2.926-.38.998-1.325 1.676-2.655 1.9-.411.073-1.386.062-1.828-.018-.964-.171-1.878-.647-2.442-1.272-.221-.244-.651-.88-.625-.926.011-.015.11-.076.221-.141l.892-.514.69-.4.145.213c.201.31.643.732.91.873.766.404 1.817.346 2.335-.118.221-.202.312-.412.312-.72 0-.279-.033-.4-.178-.61-.187-.266-.568-.49-1.65-.96-1.239-.533-1.772-.864-2.26-1.39a3.167 3.167 0 01-.659-1.2c-.091-.34-.114-1.189-.042-1.531.255-1.2 1.158-2.031 2.462-2.279.422-.08 1.406-.05 1.82.054v-.002zm-5.633 1.001l.007.983H10.59v8.876H8.381v-8.876H5.257v-.964l.027-.99c.01-.015 1.912-.022 4.217-.019l4.194.012.012.978z" fill="#007ACC"></path></svg>
                          <span className="justify-content-center px-3">Typescript</span>
                      </li>
                  </ul>
                  <ul className="row gap-3 mt-3 mx-0 my-0">
                      <li className="skill-card rounded-3 p-3 col">
                          <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="flex-shrink-0 justify-content-center react-bg p-2 rounded-2"
                          >
                              <g clipPath="url(#prefix__clip0)" fill="#8B5CF6"><path d="M2.778 8.054h3.098c.91.01 1.569.354 1.977 1.03.409.677.544 1.6.405 2.772a6.6 6.6 0 01-.358 1.576c-.178.515-.424.98-.74 1.393-.386.526-.798.859-1.237 1-.44.142-.894.212-1.364.212H3.17l-.44 2.879H1.126L2.778 8.054zm1.353 1.727l-.694 4.545c.046.01.093.015.139.015h.162c.74.01 1.356-.086 1.85-.288.493-.212.824-.95.994-2.212.138-1.06 0-1.671-.417-1.833-.408-.161-.92-.237-1.537-.227-.093.01-.181.015-.266.015h-.243l.012-.015M10.088 5.16h1.596l-.451 2.894h1.433c.787.02 1.372.233 1.758.636.393.404.508 1.172.346 2.303l-.774 5.044h-1.619l.74-4.817c.077-.505.054-.863-.07-1.075-.122-.212-.388-.318-.797-.318l-1.283-.016-.948 6.226H8.424l1.664-10.876zM16.484 8.054h3.098c.91.01 1.568.354 1.977 1.03.408.677.543 1.6.404 2.772a6.6 6.6 0 01-.358 1.576c-.177.515-.424.98-.74 1.393-.385.526-.798.859-1.237 1-.44.142-.894.212-1.364.212h-1.387l-.44 2.879H14.83l1.654-10.862zm1.352 1.727l-.693 4.545c.046.01.092.015.138.015h.162c.74.01 1.357-.086 1.85-.288.493-.212.825-.95.994-2.212.139-1.06 0-1.671-.416-1.833-.409-.161-.921-.237-1.538-.227-.092.01-.18.015-.266.015h-.242l.011-.015"></path></g><defs><clipPath id="prefix__clip0"><path fill="#fff" transform="translate(1.125 4.875)" d="M0 0h21.813v14.291H0z"></path></clipPath></defs></svg>
                          <span className="justify-content-center px-3">PHP</span>
                      </li>
                      <li className="skill-card rounded-3 p-3 col">
                          <svg
                              className="justify-content-center react-bg p-2 rounded-2"
                              viewBox="0 0 256 256"
                              version="1.1">
                              <g>
                                  <path d="M0,222.991225 C0,241.223474 14.7785318,256 33.0087747,256 L222.991225,256 C241.223474,256 256,241.221468 256,222.991225 L256,33.0087747 C256,14.7765263 241.221468,0 222.991225,0 L33.0087747,0 C14.7765263,0 0,14.7785318 0,33.0087747 L0,222.991225 Z" fill="#563D7C">
                                  </path>
                                  <path d="M106.157563,113.238095 L106.157563,76.9845938 L138.069328,76.9845938 C141.108559,76.9845938 144.039202,77.2378593 146.861345,77.7443978 C149.683488,78.2509362 152.179961,79.1554557 154.35084,80.4579832 C156.52172,81.7605107 158.258397,83.5695496 159.560924,85.8851541 C160.863452,88.2007585 161.514706,91.1675823 161.514706,94.7857143 C161.514706,101.298352 159.560944,106.001853 155.653361,108.896359 C151.745779,111.790864 146.752832,113.238095 140.67437,113.238095 L106.157563,113.238095 L106.157563,113.238095 Z M72.07493,50.5 L72.07493,205.5 L147.186975,205.5 C154.133788,205.5 160.899594,204.631661 167.484594,202.894958 C174.069594,201.158255 179.93088,198.480877 185.068627,194.862745 C190.206375,191.244613 194.294803,186.577293 197.334034,180.860644 C200.373264,175.143996 201.892857,168.37819 201.892857,160.563025 C201.892857,150.866431 199.541107,142.581033 194.837535,135.706583 C190.133963,128.832132 183.00635,124.020088 173.454482,121.270308 C180.401295,117.941627 185.647508,113.672295 189.193277,108.462185 C192.739047,103.252075 194.511905,96.7395349 194.511905,88.9243697 C194.511905,81.6881057 193.317939,75.6097352 190.929972,70.6890756 C188.542005,65.7684161 185.177193,61.8247114 180.835434,58.8578431 C176.493676,55.8909749 171.283644,53.756309 165.205182,52.4537815 C159.12672,51.151254 152.397096,50.5 145.016106,50.5 L72.07493,50.5 L72.07493,50.5 Z M106.157563,179.015406 L106.157563,136.466387 L143.279412,136.466387 C150.660401,136.466387 156.594049,138.166883 161.080532,141.567927 C165.567016,144.968971 167.810224,150.649353 167.810224,158.609244 C167.810224,162.661552 167.122789,165.990183 165.747899,168.595238 C164.373009,171.200293 162.527789,173.262597 160.212185,174.782213 C157.89658,176.301828 155.219203,177.387252 152.179972,178.038515 C149.140741,178.689779 145.956833,179.015406 142.628151,179.015406 L106.157563,179.015406 L106.157563,179.015406 Z" fill="#FFFFFF">
                                  </path>
                              </g>
                          </svg>
                         <span className="justify-content-center px-3">Bootstrap</span>
                      </li>
                      <li className="skill-card rounded-3 p-3 col">
                          <svg xmlns="http://www.w3.org/2000/svg"
                               viewBox="0 0 512 512"
                               fill="#dd4b25"
                               className="justify-content-center react-bg p-2 rounded-2"
                          ><path d="M64 32l34.94 403.21L255.77 480 413 435.15 448 32zm308 132H188l4 51h176l-13.51 151.39L256 394.48l-98.68-28-6.78-77.48h48.26l3.42 39.29L256 343.07l53.42-14.92L315 264H148l-12.59-149.59H376.2z"></path></svg>                          <span className="justify-content-center px-3">HTML</span>
                      </li>
                  </ul>
                  <ul className="row gap-3 mt-3  mx-0 my-0">
                      <li className="skill-card rounded-3 p-3 col">
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="justify-content-center react-bg p-2 rounded-2"
                          ><path fill="#264de4" d="m18.824 0-1.61 17.996L9.997 20l-7.203-2L1.187 0Zm0 0"></path><path fill="#ebebeb" d="M10.004 8.148H4.867l.2 2.207h4.937ZM10.004 3.68H4.469l.199 2.207h5.336ZM5.164 11.46l.309 3.466 4.523 1.254h.008v-2.297h-.008l-2.46-.664-.157-1.758Zm0 0"></path><path fill="#fff" d="m12.715 10.355-.254 2.864-2.465.664v2.297l4.527-1.254.032-.371.52-5.813.054-.594.398-4.468h-5.53v2.207h3.112l-.203 2.261h-2.91v2.207Zm0 0"></path></svg>
                          <span className="justify-content-center px-3">CSS</span>
                      </li>
                      <li className="skill-card rounded-3 p-3 col">
                          <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="justify-content-center react-bg p-2 rounded-2"
                          ><path fillRule="evenodd" clipRule="evenodd" d="M6.333 9.933C7.088 6.911 8.978 5.4 12 5.4c4.533 0 5.1 3.4 7.367 3.967 1.511.377 2.833-.189 3.966-1.7-.755 3.022-2.644 4.533-5.666 4.533-4.534 0-5.1-3.4-7.367-3.967-1.511-.378-2.833.189-3.967 1.7zm-5.666 6.8C1.422 13.711 3.31 12.2 6.333 12.2c4.534 0 5.1 3.4 7.367 3.967 1.51.377 2.833-.19 3.967-1.7C16.91 17.489 15.022 19 12 19c-4.533 0-5.1-3.4-7.367-3.967-1.511-.378-2.833.189-3.966 1.7z" fill="url(#prefix__paint0_linear)"></path><defs><linearGradient id="prefix__paint0_linear" x1=".667" y1="-6.689" x2="23.333" y2="31.089" gradientUnits="userSpaceOnUse"><stop stopColor="#2383AE"></stop><stop offset="1" stopColor="#6DD7B9"></stop></linearGradient></defs></svg>
                          <span className="justify-content-center px-3">Tailwind CSS</span>
                      </li>
                      <li className="skill-card rounded-3 p-3 col">
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              className="justify-content-center react-bg p-2 rounded-2"
                              fill="#FFFFFF"
                          ><path className="fill-black/75 dark:fill-slate-200" d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"></path></svg>
                          <span className="justify-content-center px-3">Github</span>
                      </li>
                  </ul>
                  <ul className="row gap-3 mt-3  mx-0 my-0">
                      <li className="skill-card rounded-3 p-3 col">
                          <svg
                              className="justify-content-center react-bg p-2 rounded-2"
                              viewBox="0 0 256 256"
                              xmlns="http://www.w3.org/2000/svg"
                              preserveAspectRatio="xMinYMin meet"
                          >
                              <g fill="#F35045">
                                  <path d="M160.445 208c2 2.889 3.222 2.667 4.777 2 1.555-.667 81.556-27.667 84-28.555 2.444-.889 1.667-1.667.89-2.89-.778-1.222-27.445-37.444-28.779-39.555-1.333-2.111-2-1.667-4.111-1l-84.805 22.067S158.445 205.11 160.445 208zM256 171.115v-42.398c-9.541 2.542-21.609 5.756-26.373 7.023 7.187 9.616 18.423 24.665 26.373 35.375zM229.545 83.521c-1.307.297-30.247 5.527-32.03 5.764-1.782.238-1.188 1.248-.475 2.258l25.467 34.943s31.139-7.725 33.041-8.141c.154-.034.305-.07.452-.107v-4.627c-5.66-7.177-21.08-26.718-22.413-28.544-1.604-2.199-2.734-1.842-4.042-1.546z"/>
                                  <path d="M47.456 28.634c6.267-.285 6.839 1.141 9.592 5.224l69.17 115.642 86.974-20.835c-4.819-6.831-26.695-37.846-28.81-40.806-2.376-3.328.06-4.873 3.923-5.526 3.862-.654 37.14-6.24 39.992-6.656 2.853-.416 5.112-1.426 9.746 4.16 2.372 2.858 10.412 12.87 17.957 22.255V48c0-13.222-4.695-24.528-14.083-33.917C232.528 4.695 221.222 0 208 0H48C34.778 0 23.472 4.695 14.083 14.083 8.698 19.47 4.865 25.487 2.57 32.134c15.678-1.288 40.501-3.3 44.887-3.5z"/>
                                  <path d="M168.289 223.564c-7.334 2.222-10.623 3.325-15.4-3.342-3.578-4.993-22.927-39.843-32.414-57.023-17.955 4.702-50.814 13.278-60.29 15.555-9.248 2.222-13.198-3.323-14.717-6.74C44.403 169.616 17.289 111.158 0 73.65V208c0 13.223 4.695 24.527 14.083 33.917C23.472 251.305 34.778 256 48 256h160c13.222 0 24.528-4.695 33.917-14.083C251.305 232.527 256 221.223 256 208v-15.781c-19.64 7.184-82.77 29.848-87.711 31.345z"/>
                                  <path d="M60.412 165.288c2.6-.595 51.313-12.253 52.353-12.476 1.04-.223 1.708-.817.594-2.747-1.114-1.93-64.934-112.09-64.934-112.09-.589-1.011-.421-1.348-2.022-1.264-1.427.076-37.538 3.298-45.898 3.996a51.038 51.038 0 0 0-.461 5.331c8.487 17.375 57.199 117.837 57.472 118.655.297.892.297 1.189 2.896.595z"/>
                              </g>
                          </svg>
                          <span className="justify-content-center px-3">Laravel</span>
                      </li>
                      <li className="rounded-3 p-3 col"></li>
                      <li className="rounded-3 p-3 col"></li>
                  </ul>
              </section>
          </main>

          <footer className="container my-5 mt-5">
              <hr />
              <div className="d-flex justify-content-between">
                  <small className="text-grey-only">2024
                      <span className="hidden md:inline-flex"> - Nothing reserved :)</span>
                  </small>
                  <small className="text-grey-only">Built with love in
                      <a target="_blank" href="https://react.dev/" className="text-advice"> React native</a>
                  </small>
              </div>
          </footer>

      </>
  )
}

export default App
