/**
 * @name Z's Experiment Config
 * @description A script to automatically configure Discord experiments.
 * @author ZcraftElite
 * @version 1.1.0
 */

const experiments = {
    "2025-10-clicker-game": 1,
    "2025-10_icymi_desktop_client": 1,
    "2025-09_you_bar": 3,
    "2025-09-user-profile-application-widgets-viewing": 1,
    "2025-09-user-profile-wishlist-editing": 1,
    "2025-09-user-profile-wishlist-viewing": 1,
    "2025-09-saved-custom-themes": 1,
    "2025-09_project_turbo": 1,
    "2025-08_back_forward": 1,
    "2025-08_emoji_studio_entrypoint": 1,
    "2025-08_request_to_stream": 1,
    "2025-08_voice_channel_duration": 1,
    "2025-08_custom_theme_share_recieve": 1,
    "2025-08_custom_theme_share_send": 1,
    "2025-07_camera_toggle_sound": 1,
    "2025-07_display_name_styles_setter": 1,
    "2025-07_display_name_styles_viewer": 1,
    "2025-07_family_center_v2": 1,
    "2025-07_ostrich": 1,
    "2025-07_staff_ai_features": 1,
    "2025-06_game_mentions": 1,
    "2025-06_game_mentions_user": 1,
    "2025-06_new_emoji_who_dis": 1,
    "2025-06_search_desktop_xdm_experiment": 1,
    "2025-05_flamingo_intro_nux": 1,
    "2025-05_flamingo_prefetch": 1,
    "2025-05_tenure_ambient_badges": 1,
    "2025-04_desktop_notification_center": 3,
    "2025-05_enable_emoji_in_channel_names_guild": 1,
    "2025-05_virtual_currency_onboarding_experience": 1,
    "2025-05_mobile_video_quest_rollout": 1,
    "2025-05_reverse_trial_promotion": 1,
    "2025-04_tenure_level_up_moment": 2,
    "2025-04_rich_presence_activity_invite_redesign": 1,
    "2025-04_user_profile_modal_v2": 1,
    "2025-04_icymi_search_experience": 3,
    "2025-04_report_to_mod": 1,
    "2025-04_win_electron_notifications": 1,
    "2025-04_emoji_studio": 1,
    "2025-04_desktop_refresh_fast_follows": 1,
    "2025-04_unread_dm_dots_desktop": 1,
    "2025-04_desktop_new_activity_badge_treatment": 2,
    "2025-04_app_launcher_friends_who_play": 1,
    "2025-04_custom_status_labels": 1,
    "2025-04_gdm_bedazzling": 2,
    "2025-04_gdm_born_this_named": 1,
    "2025-03_settings_authorized_apps_redesign": 1,
    "2025-03_unread_dm_dots_desktop": 1,
    "2025-03_activity_controller_icon": 1,
    "2025-03_activity_status_descriptive_text": 1,
    "2025-03_fractional_premium_boost_management": 1,
    "2025-03_custom_status_prompts": 1,
    "2025-03_dm_chat_wallpapers_setter": 1,
    "2025-03_dm_chat_wallpapers_viewer": 1,
    "2025-03_guild_profile_invite_embed": 1,
    "2025-03_enhanced_role_colors": 1,
    "2025-03_friends_popout": 1,
    "2025-03_invites_refresh": 1,
    "2025-03_nameplate_new_release": 1,
    "2025-03_user_profile_voice_activity_card_chat_button": 1,
    "2025-03_user_profile_voice_activity_card_status": 1,
    "2025-02_voice_activity_status": 1,
    "2025-02_activity_popout_window_v2": 1,
    "2025-02_clicker_game": 1,
    "2025-02_activity_sharing_popout": 1,
    "2025-02_nameplate_purchasing": 1,
    "2025-02_name_plate_experiment": 2,
    "2025-02_reaction_reply": 1,
    "2025-02_reverse_trial_load_test": 1,
    "2025-02_settings_search_in_quick_switcher": 1,
    "2025-02_skill_trees": 1,
    "2025-01_recent_avatars": 1,
    "2025-01_expiring_status_v2": 3,
    "2025-01_virtual_currency_rollout": 1,
    "2024-12_icymi_status_with_media": 1,
    "2024-12_participants_panel": 1,
    "2024-11_soundmoji_rendering": 1,
    "2024-11_scheduled_messages": 1,
    "2024-11_soundmoji_sending": 2,
    "2024-10_flamingo": 3,
    "2024-10_rapidash_discovery_plus": 1,
    "2024-10_merge_notifications_tab": 2,
    "2024-08_friend_anniversaries": 2,
    "2024-08_soundboard_refresh": 1,
    "2024-07_icymi": 1,
    "2024-06_message_bookmarks": 2,
    "2024-05_desktop_visual_refresh": 1,
    "2024-04_custom_notification_sound_web": 2,
    "2024-04_game_settings_merge": 1,
    "2024-02_family_center_vc_join": 1,
    "2024-01_quiet_mode": 1,
    "2023-11_soundboard_recently_heard_frequently_played": 3,
    "2021-09_favorites_server": 3
};

let errors = [];

for (const [experimentName, experimentValue] of Object.entries(experiments)) {
    try {
        setExperiment(experimentName, experimentValue);
        console.log(`Successfully set experiment "${experimentName}" to value ${experimentValue}.`);
    } catch (error) {
        console.error(`Failed to set experiment "${experimentName}":`, error);
        errors.push({ name: experimentName, error: error.message });
    }
}

if (errors.length > 0) {
    console.warn("Some experiments failed to configure:");
    errors.forEach(error => {
        console.warn(`- "${error.name}": ${error.error}`);
    });
} else {
    console.log("All experiments configured successfully.");
}