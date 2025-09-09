document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector(".play-button");

    button.addEventListener("click", function() {
        openRandomURL();
    });
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
