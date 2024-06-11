import { Outlet } from "react-router-dom";

interface Props {
    
}
 
// const Post: FunctionComponent<Props> = () => {
//     return (  );
// }
function Post<FunctionComponent>():JSX.Element{
    return <>
    <h1>List</h1>
    <Outlet/>
    </>
}
export default Post;