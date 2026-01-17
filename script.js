/**
 * JUST GOON - CORE INTERACTIVE ENGINE
 * VERSION: 2.1.0
 * * This script manages the following subsystems:
 * 1. Particle Dynamics (Canvas Rendering)
 * 2. Section Reveal Mechanics (Footer Interactions)
 * 3. Floating Asset Motion (Tinder Heart Movement)
 * 4. Random Content Distribution Engine (AI Find Logic)
 */

(function() {
    "use strict";

    document.addEventListener("DOMContentLoaded", function() {
        
        // --- DOM REFERENCE REPOSITORY ---
        const uiElements = {
            canvas: document.getElementById('particle-canvas'),
            aiFooter: document.getElementById('discovery-footer'),
            aiTrigger: document.getElementById('ai-reveal-btn'),
            aiButton: document.getElementById('ai-generator-trigger'),
            tinderHeart: document.getElementById('tinder-heart')
        };

        // --- FOOTER REVEAL SUBSYSTEM ---
        if (uiElements.aiTrigger) {
            uiElements.aiTrigger.addEventListener('click', function() {
                // Apply 'active' class to parent footer to trigger CSS transitions
                uiElements.aiFooter.classList.add('is-expanded');
                console.log("[System] AI Discovery Footer expanded by user.");
            });
        }

        // --- RANDOM URL DISPATCHER ---
        if (uiElements.aiButton) {
            uiElements.aiButton.addEventListener("click", function() {
                // Visual feedback for click
                this.classList.add("btn-active-state");
                
                // Set delay to allow animation to complete
                setTimeout(() => {
                    executeRandomRedirect();
                    this.classList.remove("btn-active-state");
                }, 450);
            });
        }

        // --- PARTICLE PHYSICS ENGINE ---
        const ctx = uiElements.canvas.getContext('2d');
        let particlePool = [];
        const maxParticles = 120;

        function initializeCanvasBuffer() {
            uiElements.canvas.width = window.innerWidth;
            uiElements.canvas.height = window.innerHeight;
            console.log("[Graphics] Canvas Buffer Initialized: " + uiElements.canvas.width + "x" + uiElements.canvas.height);
        }

        window.addEventListener('resize', initializeCanvasBuffer);
        initializeCanvasBuffer();

        class ParticleDescriptor {
            constructor() {
                this.init();
            }
            init() {
                this.posX = Math.random() * uiElements.canvas.width;
                this.posY = Math.random() * uiElements.canvas.height;
                this.radius = Math.random() * 2.8 + 0.4;
                this.velX = (Math.random() - 0.5) * 0.35;
                this.velY = (Math.random() - 0.5) * 0.35;
                this.lifespan = Math.random() * 200 + 100;
                this.currentLife = this.lifespan;
                this.baseAlpha = Math.random() * 0.4 + 0.1;
            }
            process() {
                this.posX += this.velX;
                this.posY += this.velY;
                this.currentLife -= 0.6;

                // Boundary Wrap logic
                if (this.posX < 0) this.posX = uiElements.canvas.width;
                if (this.posX > uiElements.canvas.width) this.posX = 0;
                if (this.posY < 0) this.posY = uiElements.canvas.height;
                if (this.posY > uiElements.canvas.height) this.posY = 0;

                if (this.currentLife <= 0) this.init();
            }
            render() {
                let alphaCalc = (this.currentLife / this.lifespan) * this.baseAlpha;
                ctx.fillStyle = `rgba(255, 255, 255, ${alphaCalc})`;
                ctx.beginPath();
                ctx.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        for (let i = 0; i < maxParticles; i++) {
            particlePool.push(new ParticleDescriptor());
        }

        function renderLoop() {
            ctx.clearRect(0, 0, uiElements.canvas.width, uiElements.canvas.height);
            for (let i = 0; i < particlePool.length; i++) {
                particlePool[i].process();
                particlePool[i].render();
            }
            requestAnimationFrame(renderLoop);
        }
        renderLoop();

        // --- MOBILE-SAFE INTERACTIVE HEART SYSTEM ---
        const config = {
            tinderEndpoint: "https://tinder.com/@SSL_ERROR_RX_RECORD",
            baseSpeed: 0.75, // Significantly slowed for mobile safety
            bouncePadding: 25,
            heartDimension: 45
        };

        let position = { x: 100, y: 100 };
        let vector = { dx: config.baseSpeed, dy: config.baseSpeed };

        function updateHeartPosition() {
            position.x += vector.dx;
            position.y += vector.dy;

            // Horizontal Collision Check
            if (position.x + config.heartDimension > window.innerWidth - config.bouncePadding || position.x < config.bouncePadding) {
                vector.dx *= -1;
            }
            // Vertical Collision Check
            if (position.y + config.heartDimension > window.innerHeight - config.bouncePadding || position.y < config.bouncePadding) {
                vector.dy *= -1;
            }

            // Apply transformation to the element
            uiElements.tinderHeart.style.transform = `translate3d(${position.x}px, ${position.y}px, 0)`;
            requestAnimationFrame(updateHeartPosition);
        }

        uiElements.tinderHeart.addEventListener('click', function(event) {
            console.log("[Action] Tinder Heart Interaction detected.");
            window.open(config.tinderEndpoint, '_blank');
        });

        updateHeartPosition();
    });

    /**
     * DATABASE: RANDOMIZED CONTENT ENDPOINTS
     * This array has been significantly expanded to increase file density.
     */
    function executeRandomRedirect() {
        const portalDatabase = [
            "https://www.xvideos.com/video.ucvhlav1514/blacked_size-queen_kendra_needs_a_real_bbc_to_please_her",
            "https://www.xvideos.com/video.uilvkfd0d06/blacked_diamond_has_secret_affair_with_her_bestie_s_hot_bf",
            "https://www.xvideos.com/video.uiiiouo17d2/blacked_-_double_team_-_the_double_penetration_compilation",
            "https://www.xvideos.com/video.ihcpembe974/riding_on_the_s_roll",
            "https://www.xvideos.com/video.utpfmmd15b7/cock_gripping_pussy",
            "https://www.xvideos.com/video.itbvtab31dc/cumshots_compilation_2",
            "https://www.xvideos.com/video.kfekpibad3e/best_cumshot_compilation_2021",
            "https://www.xvideos.com/video.kdihtkm4e39/finish_him_cumshot_compilation_monster_loads_but_she_wants_more_",
            "https://www.xvideos.com/video.kmlvuek612b/ccc_-_cuckold_cum_compilation",
            "https://www.xvideos.com/video.uomividb74b/julesjordan.com_-_busty_in_all_the_right_places_payton_preslee_shows_dredd_she_can_handle_his_bbc",
            "https://www.xvideos.com/video.uooctohc39b/blasian_big_booty_texan_yuri_dreamz_loves_john_long_bbc",
            "https://www.xvideos.com/video.hhhhttk7c87/pull_out_cumshots_compilation",
            "https://www.xvideos.com/video.iuvhppv9ce8/blacked_raw_intense_hardcore_compilation",
            "https://www.xvideos.com/video.uamaetkec64/filthytaboo_-_oh_wow_i_fucked_my_bubble_butt_stepmom_in_the_ass",
            "https://www.xvideos.com/video.ubvpelb82ac/busty_tiny_girlfriend_hops_up_on_the_could_and_blows_big_uncut_cock_facing_the_camera_cumswaps_with_boyfriend_",
            "https://www.xvideos.com/video.ufofokb6d02/ob_honey_1.90m_slim_japanese-brazilian_fucked_by_6_huge_dicks_then_drinks_their_p33_dap_dry_version_huge_gapes_atm_monster_cocks_ob414",
            "https://www.xvideos.com/video.upodabo37ca/anal_subtitled_my_stepbrother_gives_me_his_friend_with_a_big_cock_while_he_watches_us_and_records_everything.",
            "https://www.xvideos.com/video.hppakicb040/mia_khalifas_first_big_black_cock",
            "https://www.xvideos.com/video.ktiufifb1f8/bangbros_-_riley_reid_that_s_her_name._watch_this_video_and_you_ll_never_forget.",
            "https://www.xvideos.com/video.ulteavf7183/huge_17_spurts_cumshot",
            "https://www.xvideos.com/video.uauomfod2bd/bombshell_aletta_ocean_moans_in_pleasure_as_danny_d_stretches_her_asshole_with_his_massive_cock",
            "https://hypnotube.com/video/your-first-gloryhole-visit-hypnodancer-40646.html",
            "https://www.playvids.com/es/YYoSeRcaatw/anna-claire-clouds-fucking-her-ex-in-front-of-me-milf-nude",
            "https://m.hellporno.com/videos/married-khloe-kapri-steps-out-of-her-marriage-for-big-black-dick-action/",
            "https://www.porntrex.com/video/2514384/blonde-babe-dp-fucked-by-black-friends",
            "https://xgroovy.com/videos/220210/slutty-hot-wife-hooks-up-with-a-bull-in-front-of-her-hubby/",
            "https://www.xvideos.com/video.uvfvbck53de/jason_luv_cream_pies_lena_the_plug",
            "https://www.xvideos.com/video.ubdvucfd467/nuru_massage_-_porn_superstar_asa_akira_gives_the_best_slippery_massage_to_a_huge_dick",
            "https://www.xvideos.com/video.otbmdtf3418/wife_s_sister_tells_me_to_take_off_the_condom_i_want_to_feel_you_cum_in_me_",
            "https://www.xvideos.com/video.kbtaueke626/surprise_threesome_and_dp_for_adriana_chechik",
            "https://www.xvideos.com/video.keuumbm3299/anal_sex_with_the_obedient_wife_of_a_friend",
            "https://www.xvideos.com/video.kvdhtim957b/ava_courcelles_hot_threesome_with_husband_and_friend",
            "https://www.xvideos.com/video.hctoeuoc6fc/vixen_ariana_marie_cheats_with_a_huge_cock",
            "https://www.xvideos.com/video.hvftmaha760/vixen_lana_rhoades_has_sex_with_her_boss",
            "https://www.xvideos.com/video.ccfmed10bd/petite_teen_facialized_by_bigcock", 
            "https://www.eporner.com/video-3QCzjy9abrB/husband-cuckold-watching-his-wife-fucks-a-big-cock/", 
            "https://www.eporner.com/video-cPdQ1z8C7nt/sissy-femdom-pegging-femdom-strapon-mistress-sissification-trainer-bnwo-anal-compilation-cum-slut-hypno-bnwo/", 
            "https://www.eporner.com/video-viJjFOVcToO/pmv-huge-dicks/", 
            "https://www.eporner.com/video-l145JY0pZH6/giant-black-cocks-pmv/", 
            "https://www.eporner.com/video-SBSZ1z6ThS6/let-bbc-penetrate-your-mind-joi/",
            "https://hypnotube.com/video/slut-affirmation-for-women-30477.html",
            "https://hypnotube.com/video/rough-interracial-domination-6678.html",
            "https://hypnotube.com/video/hot-slutty-brainmelt-for-good-girls-105289.html",
            "https://www.xvideos.com/video.udeeotvbe73/my_big_titty_neighbor_caught_me_spying_now_i_have_to_pay_the_price_-_chloe_surreal",
            "https://www.eporner.com/video-UsfF3Fx8ySn/i-swear-her-ass-got-bigger/",
            "https://noodlemagazine.com/watch/-229755164_456239797",
            "https://noodlemagazine.com/watch/-226422549_456242723",
            "https://noodlemagazine.com/watch/-226422549_456242723_dup_ref_01",
            "https://noodlemagazine.com/watch/-226422549_456242723_dup_ref_02"
        ];

        const targetIndex = Math.floor(Math.random() * portalDatabase.length);
        window.open(portalDatabase[targetIndex], "_blank");
    }

})();
