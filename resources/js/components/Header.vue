<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" to="/">Navbar</a>
        <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <router-link class="nav-link" to="/home"
                    >Home <span class="sr-only">(current)</span></router-link
                >
                <router-link class="nav-link" to="/about">About</router-link>
                <router-link class="nav-link" to="/user/name">User</router-link>
            </div>
        </div>
    </nav>
</template>
