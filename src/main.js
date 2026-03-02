import './style.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Menu Toggle ---
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');

    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });

    // Close mobile menu on link click
    const mobileLinks = menu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.add('hidden');
        });
    });

    // --- GSAP Animations ---

    // 1. Initial Load Animations (Hero Section)
    const tl = gsap.timeline();

    // Fade in Navbar
    tl.from("#navbar", {
        y: -100,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    });

    // Reveal Up Hero Content
    tl.from(".gs-reveal-up > *", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
    }, "-=0.4");


    // 2. Scroll Animations

    // Navbar Blur Effect on Scroll
    ScrollTrigger.create({
        start: 'top -80',
        end: 99999,
        toggleClass: { className: 'bg-dark-bg/95', targets: '#navbar' }
    });

    // Removed Parallax Effect for Background Video to prevent it from scrolling down

    // Pricing Cards Staggered Fade Up
    gsap.from(".gs-card", {
        scrollTrigger: {
            trigger: "#planos",
            start: "top 70%", // Trigger when the top of #planos hits 70% of the viewport height
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2, // Add 0.2s delay between each card animating
        ease: "back.out(1.7)"
    });

    // Hiring Section Reveal
    gsap.from("#trabalhe-conosco .gs-reveal-up", {
        scrollTrigger: {
            trigger: "#trabalhe-conosco",
            start: "top 75%",
        },
        y: 60,
        opacity: 0,
        scale: 0.95,
        duration: 1,
        ease: "power3.out"
    });

    // Footer Stagger Reveal
    gsap.from(".gs-footer > div > div", {
        scrollTrigger: {
            trigger: "#contato",
            start: "top 85%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out"
    });

});
