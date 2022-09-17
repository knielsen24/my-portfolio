import React from "react";

function Navbar() {
    return (
        <nav class="navbar navbar-expand-sm bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">
                    KN
                </a>
                <button
                    class="navbar-toggler"
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
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a
                                class="nav-link active"
                                aria-current="page"
                                href="#"
                            >
                                About
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                Projects
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                Experience
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                Contact
                            </a>
                        </li>
                        <li class="nav-item">
                            <button class="btn rounded nav-link" href="#">
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
