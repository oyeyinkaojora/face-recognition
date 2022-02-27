const ImageLinkForm = ({onInputChange,onButtonSubmit})=>{
    return(
        <div>
            <p className="f3">
                {'This magic Brain will detect  faces in your pictures Git it a try'}
            </p>
            <div>
                <div className="pa4 center form br3 shadow-5">
                    <input className="f4 pa2 w-70 center" type='text' onChange={(e)=>onInputChange(e.target.value)}/>
                    <button onClick={onButtonSubmit} className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple">Detect</button>
                </div>
            </div>        
        </div>
    );
}

export default ImageLinkForm