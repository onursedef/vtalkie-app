#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .setup(|app| {
            let auth_window = tauri::WebviewWindowBuilder::new(
                app,
                "authenticate",
                tauri::WebviewUrl::External("http://localhost:1420/authenticate".parse().unwrap())
            );

            auth_window
                .title("VTalkie | Authenticate")
                .center()
                .resizable(false)
                .maximizable(false)
                .decorations(false)
                .inner_size(500.0, 600.0)
                .build()
                .unwrap();
            Ok(())
        })
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
