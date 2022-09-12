import Header from "./Header";

const LayOut = ({ children }) => {
    return (
        <>
            <Header />
            <div className="flex justify-center">
                <div className="w-full max-w-main mt-20">
                    {children}
                </div>
            </div>
        </>
    );
}

export default LayOut;