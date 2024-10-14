// declarations.d.ts

declare module '*.module.css' {
    const classes: { [key: string]: string };
    export default classes;
  }
  // declarations.d.ts

declare module '*.png' {
  const value: string;
  export default value;
}
