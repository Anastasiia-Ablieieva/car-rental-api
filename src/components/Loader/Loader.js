import { ThreeDots } from  'react-loader-spinner';

function Loader() {
    return (
        <ThreeDots 
            height="80" 
            width="80" 
            radius="9"
            color="#3471ffd2" 
            ariaLabel="three-dots-loading"
            wrapperStyle={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: 180,
            }}
            wrapperClassName=""
            visible={true}
        />
    )
};

export default Loader;