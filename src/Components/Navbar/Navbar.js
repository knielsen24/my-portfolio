import React from "react";

function Navbar() {
    return (
        <nav class="navbar navbar-expand-sm bg-dark-grey mw-75">
            <div class="container-fluid">
                <a class="navbar-brand text-orange" href="/">
                    KN
                </a>
                <button
                    class="navbar-toggler bg-white"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarNav">
                    <ul class="navbar-nav text-white ms-auto">
                        <li class="nav-item">
                            <a
                                class="nav-link btn text-white"
                                aria-current="page"
                                href="#"
                            >
                                About
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link btn text-white" href="#">
                                Projects
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link btn text-white" href="#">
                                Experience
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link btn text-white" href="#">
                                Contact
                            </a>
                        </li>
                        <li class="nav-item align-self-center ">
                            <button class="rounded bg-transparent border-orange text-orange nav-link py-0 px-2" href="#">
                                Resume
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
