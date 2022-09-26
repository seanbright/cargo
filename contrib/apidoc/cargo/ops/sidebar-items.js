window.SIDEBAR_ITEMS = {"enum":[["CompileFilter",""],["FilterRule",""],["LibRule",""],["Packages",""],["RegistryConfig","Registry settings loaded from config files."],["VersionControl",""]],"fn":[["add_overrides","Read the `paths` configuration variable to discover all path overrides that have been configured."],["check_dep_has_version","Returns true if the dependency is either git or path, false otherwise Error if a git/path dep is transitive, but has no version (registry source). This check is performed on dependencies before publishing or packaging"],["check_yanked",""],["clean","Cleans the package’s build artifacts."],["compile",""],["compile_with_exec","Like `compile` but allows specifying a custom `Executor` that will be able to intercept build calls and add custom logic. `compile` uses `DefaultExecutor` which just passes calls through."],["compile_ws",""],["configure_http_handle","Configure a libcurl http handle with the defaults options for Cargo"],["create_bcx",""],["doc","Main method for `cargo doc`."],["fetch","Executes `cargo fetch`."],["fix",""],["fix_exec_rustc","Entry point for `cargo` running as a proxy for `rustc`."],["fix_get_proxy_lock_addr","Provide the lock address when running in proxy mode"],["generate_lockfile",""],["get_resolved_packages",""],["http_handle","Creates a new HTTP handle with appropriate global configuration for cargo."],["http_handle_and_timeout",""],["init",""],["install",""],["install_list","Display a list of installed binaries."],["load_pkg_lockfile",""],["modify_owners",""],["needs_custom_http_transport",""],["new",""],["output_metadata","Loads the manifest, resolves the dependencies of the package to the concrete used versions - considering overrides - and writes all dependencies in a JSON format to stdout."],["package",""],["package_one",""],["pkgid",""],["print",""],["publish",""],["read_package",""],["read_packages",""],["registry_configuration","Returns the index and token from the config file for the given registry."],["registry_login",""],["registry_logout",""],["resolve_all_features","Gets all of the features enabled for a package, plus its dependencies’ features."],["resolve_to_string","Generate a toml String of Cargo.lock from a Resolve."],["resolve_with_previous","Resolves all dependencies for a package using an optional previous instance of resolve to guide the resolution process."],["resolve_ws","Resolves all dependencies for the workspace using the previous lock file as a guide if present."],["resolve_ws_with_opts","Resolves dependencies for some packages of the workspace, taking into account `paths` overrides and activated features."],["run",""],["run_benches","Compiles and runs benchmarks."],["run_tests","Compiles and runs tests."],["search",""],["uninstall",""],["update_lockfile",""],["vendor",""],["write_pkg_lockfile",""],["yank",""]],"mod":[["cargo_add","Core of cargo-add command"],["cargo_clean",""],["cargo_compile","The Cargo “compile” operation."],["cargo_config","Implementation of `cargo config` subcommand."],["cargo_doc",""],["cargo_fetch",""],["cargo_generate_lockfile",""],["cargo_install",""],["cargo_new",""],["cargo_output_metadata",""],["cargo_package",""],["cargo_pkgid",""],["cargo_read_manifest",""],["cargo_run",""],["cargo_test",""],["cargo_uninstall",""],["common_for_install_and_uninstall",""],["fix","High-level overview of how `fix` works:"],["lockfile",""],["registry",""],["resolve","High-level APIs for executing the resolver."],["tree","Implementation of `cargo tree`."],["vendor",""]],"struct":[["CleanOptions",""],["CompileOptions","Contains information about how a package should be compiled."],["DocOptions","Strongly typed options for the `cargo doc` command."],["ExportInfo","This is the structure that is serialized and displayed to the user."],["FetchOptions",""],["FixOptions",""],["HttpTimeout",""],["NewOptions",""],["OutputMetadataOptions",""],["OwnersOptions",""],["PackageOpts",""],["PublishOpts",""],["TestOptions",""],["UpdateOptions",""],["VendorOptions",""],["WorkspaceResolve","Result for `resolve_ws_with_opts`."]]};