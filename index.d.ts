declare module 'rn-content-loader' {
  import React from 'react'

  interface ContentLoaderProps {
    primaryColor?: string;
    secondaryColor?: string;
    duration?: number;
    width?: string | number;
    height?: string | number;
    viewBox?: string;
    x1?: string;
    y1?: string;
    x2?: string;
    y2?: string;
  }


  const ContentLoader: React.Component<ContentLoaderProps>;

  export default ContentLoader;
}