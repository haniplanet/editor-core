import * as React from 'react';
interface IParameters {
    src: string;
}
declare const extension: ({ src }: IParameters) => React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
export default extension;
