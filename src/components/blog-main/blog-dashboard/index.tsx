import { useReduxDispatch } from "../../../hooks/userRedux";
import { authorizationModalVisibltiyConf } from "../../../redux/modal-slice";
const BlogDashboard = () => {
    const dispatch = useReduxDispatch();
    return (
        <div>
            <div className="w-[1150px] mt-5 mb-5 m-auto text-center">
                <img src="https://green-shop-otabek.vercel.app/assets/blog-header-hi2KeX2m.png" alt="" className="h-full w-full object-contain rounded-xl " />
                <h1 className="font-bold mb-5 text-center text-6xl leading-[130%] max-[730px]:text-4xl max-[430px]:text-2xl">Monetize your content 
                    <br/> 
                    with
                    <span className="text-[#46A358]"> GreenShop</span>
                </h1>
                <p className="text-center mb-5 m-auto w-[70%] leading-[140%] text-[#3d3d3d] font-medium max-[730px]:w-[100%] max-[730px]:font-normal max-[730px]:text-[14px]">GreenShop - a platform for buying and selling, publishing and monetizing all types of flowers: articles, notes, video, photos, podcasts or songs.</p>
                <button onClick={() => dispatch(authorizationModalVisibltiyConf())} className="bg-[#46A358] cursor-pointer rounded-md text-white p-[8px_25px] max-[335px]:w-full">Join GreenShop</button>
            </div>    
        </div>
    )
}

export default BlogDashboard