type ErrorProps = {
    error:string;
}

const Error = ({error}: ErrorProps) => {
    return <p role="alert" className="text-red-600 font-bold">{ error}</p>;
}
export default Error;