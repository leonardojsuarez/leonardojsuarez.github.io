export interface ConfigurationType {
  language: String,
  theme: String
}
export interface ConfigContextType {
  config: ConfigurationType,
  toggleTheme: Function
}