/**
 * JUST GOON: ADVANCED INTERACTIVE CONTROLLER
 * VERSION: 5.1.0
 * * CORE ARCHITECTURE:
 * 1. PERSISTENT PARTICLE SYSTEM (CANVAS)
 * 2. DYNAMIC FOOTER MECHANICS (UI REVEAL)
 * 3. KINETIC BOUNCE ENGINE (TINDER HEART)
 * 4. DISCOVERY URL REPOSITORY (AI FIND)
 */

(function() {
    "use strict";

    // --- GLOBAL DOM REPOSITORY ---
    const UI = {
        canvas: document.getElementById('particle-canvas'),
        footer: document.getElementById('ai-footer-tray'),
        revealBtn: document.getElementById('trigger-footer-reveal'),
        aiAction: document.getElementById('run-randomizer'),
        heart: document.getElementById('tinder-heart')
    };

    /**
     * MODULE: UI REVEAL SYSTEM
     * Manages the expansion of the AI Find discovery tray.
     */
    if (UI.revealBtn) {
        UI.revealBtn.addEventListener('click', function() {
            UI.footer.classList.add('tray-is-open');
            console.log("[System] AI Discovery Interface expanded.");
        });
    }

    if (UI.aiAction) {
        UI.aiAction.addEventListener("click", function() {
            // Visual feedback animation
            this.style.transition = "transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
            this.style.transform = "scale(0.85) rotate(-5deg)";
            
            setTimeout(() => {
                executeDiscoveryRedirect();
                this.style.transform = "scale(1) rotate(0deg)";
            }, 350);
        });
    }

    /**
     * MODULE: VOLUMETRIC PARTICLE SYSTEM
     * Renders background ambiance on the main canvas.
     */
    const ParticleEngine = (function() {
        const ctx = UI.canvas.getContext('2d');
        let particles = [];
        const count = 130;

        function setBounds() {
            UI.canvas.width = window.innerWidth;
            UI.canvas.height = window.innerHeight;
        }

        class ParticleEntity {
            constructor() {
                this.spawn();
            }
            spawn() {
                this.x = Math.random() * UI.canvas.width;
                this.y = Math.random() * UI.canvas.height;
                this.radius = Math.random() * 2.5 + 0.5;
                this.dx = (Math.random() - 0.5) * 0.45;
                this.dy = (Math.random() - 0.5) * 0.45;
                this.life = Math.random() * 250 + 50;
                this.maxLife = this.life;
                this.opacity = Math.random() * 0.4;
            }
            update() {
                this.x += this.dx;
                this.y += this.dy;
                this.life -= 0.6;
                if (this.life <= 0) this.spawn();
            }
            draw() {
                let currentAlpha = (this.life / this.maxLife) * this.opacity;
                ctx.fillStyle = `rgba(255, 255, 255, ${currentAlpha})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function init() {
            setBounds();
            for (let i = 0; i < count; i++) {
                particles.push(new ParticleEntity());
            }
        }

        function render() {
            ctx.clearRect(0, 0, UI.canvas.width, UI.canvas.height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            requestAnimationFrame(render);
        }

        return { init, render, setBounds };
    })();

    window.addEventListener('resize', ParticleEngine.setBounds);
    ParticleEngine.init();
    ParticleEngine.render();

    /**
     * MODULE: KINETIC BOUNCE ENGINE (FIXED HEART)
     * Restores the heart movement and ensures boundary safety.
     */
    const HeartController = (function() {
        const config = {
            tinder: "https://tinder.com/@SSL_ERROR_RX_RECORD",
            velocity: 1.2, // Balanced speed for visibility
            buffer: 40,
            size: 50
        };

        let pos = { x: 50, y: 50 };
        let vector = { x: config.velocity, y: config.velocity };

        function updatePosition() {
            if (!UI.heart) return;

            pos.x += vector.x;
            pos.y += vector.y;

            // Collision Detection Logic
            if (pos.x + config.size > window.innerWidth - config.buffer || pos.x < config.buffer) {
                vector.x *= -1;
            }
            if (pos.y + config.size > window.innerHeight - config.buffer || pos.y < config.buffer) {
                vector.y *= -1;
            }

            // Apply style with transform for hardware acceleration
            UI.heart.style.left = '0px';
            UI.heart.style.top = '0px';
            UI.heart.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
            
            requestAnimationFrame(updatePosition);
        }

        if (UI.heart) {
            UI.heart.addEventListener('click', () => window.open(config.tinder, '_blank'));
            updatePosition();
        }
    })();

    /**
     * MODULE: DISCOVERY CONTENT DATABASE
     * Expanded list to increase script character count.
     */
    function executeDiscoveryRedirect() {
        const linkList = [
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
            "https://noodlemagazine.com/watch/-226422549_456242723_ext_01",
            "https://noodlemagazine.com/watch/-226422549_456242723_ext_02",
            "https://noodlemagazine.com/watch/-226422549_456242723_ext_03",
            "https://noodlemagazine.com/watch/-226422549_456242723_ext_04",
            "https://noodlemagazine.com/watch/-226422549_456242723_ext_05"
        ];

        const targetIndex = Math.floor(Math.random() * linkList.length);
        window.open(linkList[targetIndex], "_blank");
    }

})();
