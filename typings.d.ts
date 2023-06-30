declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.js';
declare module 'lodash';
declare module 'react/jsx-runtime';
declare module '*.tsx';
declare module '*.ts';
declare module '*.svg' {
  export function ReactComponent(
    // eslint-disable-next-line no-unused-vars
    props: React.SVGProps<SVGSVGElement>,
  ): React.ReactElement;
  const url: string;
  export default url;
}
