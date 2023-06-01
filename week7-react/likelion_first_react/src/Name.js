
const Name = (props) =>{
// const Name=({name, children})=>{

    return(
        <div>
            <h1>{props.name}</h1>
            <h1>{props.children}</h1>
        </div>
    );
};

Name.defaultProps= { //기본값넣는객체
    name: "기본 값",
};

export default Name;