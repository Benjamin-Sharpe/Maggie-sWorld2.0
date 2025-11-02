document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector(".play-button");

    button.addEventListener("click", function() {
        openRandomURL();
    });

    // Particle Animation
    const canvas = document.getElementById('particle-canvas');
    const ctx = canvas.getContext('2d');
    let particles = [];

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.size = Math.random() * 2 + 0.5; // Smaller particles
            this.speedX = Math.random() * 0.5 - 0.25; // Slower movement
            this.speedY = Math.random() * 0.5 - 0.25; // Slower movement
            this.color = 'rgba(255, 255, 255, 0.3)'; // Subtle white glow
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.size > 0.1) this.size -= 0.01; // Fade out slowly
        }
        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function createParticles() {
        for (let i = 0; i < 5; i++) { // Create a few particles at a time
            particles.push(new Particle(Math.random() * canvas.width, Math.random() * canvas.height));
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
        }
        particles = particles.filter(particle => particle.size > 0.1); // Remove faded particles
        if (particles.length < 100) { // Maintain a certain number of particles
            createParticles();
        }
        requestAnimationFrame(animateParticles);
    }

    createParticles();
    animateParticles();

    // Floating Heart Animation
    const tinderHeart = document.getElementById('tinder-heart');
    const tinderUrl = "https://tinder.com/@SSL_ERROR_RX_RECORD";

    let heartX = Math.random() * (window.innerWidth - 50); // Initial random X position
    let heartY = Math.random() * (window.innerHeight - 50); // Initial random Y position
    let heartSpeedX = (Math.random() - 0.5) * 4; // Increased speed range
    let heartSpeedY = (Math.random() - 0.5) * 4; // Increased speed range
    const heartSize = 50; // Approximate size for boundary checks

    function animateHeart() {
        heartX += heartSpeedX;
        heartY += heartSpeedY;

        // Bounce off edges with slight randomness
        if (heartX + heartSize > window.innerWidth || heartX < 0) {
            heartSpeedX *= -1;
            heartSpeedX += (Math.random() - 0.5) * 0.5; // Add slight random change
        }
        if (heartY + heartSize > window.innerHeight || heartY < 0) {
            heartSpeedY *= -1;
            heartSpeedY += (Math.random() - 0.5) * 0.5; // Add slight random change
        }

        // Keep heart within bounds if it somehow gets stuck
        if (heartX < 0) heartX = 0;
        if (heartX + heartSize > window.innerWidth) heartX = window.innerWidth - heartSize;
        if (heartY < 0) heartY = 0;
        if (heartY + heartSize > window.innerHeight) heartY = window.innerHeight - heartSize;


        tinderHeart.style.left = heartX + 'px';
        tinderHeart.style.top = heartY + 'px';

        requestAnimationFrame(animateHeart);
    }

    tinderHeart.addEventListener('click', () => {
        window.open(tinderUrl, '_blank');
    });

    animateHeart();
});

function openRandomURL() {
    let urls = [
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
            "https://www.xvideos.com/video.uiiiouo17d2/blacked_-_double_team_-_the_double_penetration_compilation",
            "https://www.xvideos.com/video.uooctohc39b/blasian_big_booty_texan_yuri_dreamz_loves_john_long_bbc", 
            "https://www.xvideos.com/video.hhhhttk7c87/pull_out_cumshots_compilation", 
            "https://www.xvideos.com/video.iuvhppv9ce8/blacked_raw_intense_hardcore_compilation", 
            "https://www.xvideos.com/video.hvumdtmf453/white_women_need_bbc_-_interracial_compilation_hd_-_pornkhub.com", 
            "https://www.xvideos.com/video.uamaetkec64/filthytaboo_-_oh_wow_i_fucked_my_bubble_butt_stepmom_in_the_ass", 
            "https://www.xvideos.com/video.ubvpelb82ac/busty_tiny_girlfriend_hops_up_on_the_could_and_blows_big_uncut_cock_facing_the_camera_cumswaps_with_boyfriend_", 
            "https://hypnotube.com/video/your-first-gloryhole-visit-hypnodancer-40646.html",
            "https://www.playvids.com/es/YYoSeRcaatw/anna-claire-clouds-fucking-her-ex-in-front-of-me-milf-nude",
            "https://m.hellporno.com/videos/married-khloe-kapri-steps-out-of-her-marriage-for-big-black-dick-action/",
            "https://www.porntrex.com/video/2514384/blonde-babe-dp-fucked-by-black-friends",
            "https://xgroovy.com/videos/220210/slutty-hot-wife-hooks-up-with-a-bull-in-front-of-her-hubby/",
            "https://www.xvideos.com/video.ucvhlav1514/blacked_size-queen_kendra_needs_a_real_bbc_to_please_her", 
            "https://www.xvideos.com/video.uilvkfd0d06/blacked_diamond_has_secret_affair_with_her_bestie_s_hot_bf", 
            "https://www.xvideos.com/video.ihcpembe974/riding_on_the_s_roll", 
            "https://www.xvideos.com/video.utpfmmd15b7/cock_gripping_pussy", 
            "https://www.xvideos.com/video.itbvtab31dc/cumshots_compilation_2", 
            "https://www.xvideos.com/video.kfekpibad3e/best_cumshot_compilation_2021", 
            "https://www.xvideos.com/video.kdihtkm4e39/finish_him_cumshot_compilation_monster_loads_but_she_wants_more_", 
            "https://www.xvideos.com/video.kmlvuek612b/ccc_-_cuckold_cum_compilation",
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
            "https://www.eporner.com/video-viJjFOVcToO/pmv-huge-dicks/", 
            "https://hypnotube.com/video/slut-affirmation-for-women-30477.html",
    	    "https://hypnotube.com/video/rough-interracial-domination-6678.html",
            "https://hypnotube.com/video/hot-slutty-brainmelt-for-good-girls-105289.html",
            "https://hypnotube.com/video/hot-slutty-brainmelt-for-good-girls-105289.html",
            "https://www.xvideos.com/video.udeeotvbe73/my_big_titty_neighbor_caught_me_spying_now_i_have_to_pay_the_price_-_chloe_surreal",
            "https://www.eporner.com/video-UsfF3Fx8ySn/i-swear-her-ass-got-bigger/",
            "https://www.eporner.com/video-A5s7cVBTxUz/andr3-a-ur4ch-alemao/",
            "https://noodlemagazine.com/watch/-229755164_456239797",
            "https://noodlemagazine.com/watch/-227575090_456240684",
            "https://noodlemagazine.com/watch/-181509778_456246225",
            "https://noodlemagazine.com/watch/-224711092_456239480",
            "https://noodlemagazine.com/watch/-226422549_456242723"

                ];
    if (urls.length > 0) {
        let randomIndex = Math.floor(Math.random() * urls.length);
        let button = document.querySelector(".play-button");

        // Add animation class
        button.classList.add("clicked");

        setTimeout(() => {
            window.open(urls[randomIndex], "_blank");
            button.classList.remove("clicked");
        }, 500);
    } else {
        alert("No URLs available! Please add links.");
    }
}
