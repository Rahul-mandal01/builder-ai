
const PromptInput = ({ onSubmit, loading = false,
    placeholder = "Describe the website you want to build...",
    large = false, autoFocus = false, variant = "default" }) => {

        const [value, setValue] = useState("");
        const textareaRef = useRef(null);
        const handleSubmit = (e) => {
            if(e) e.preventDefault();
            const trimmed = value.trim();
            if(!trimmed || loading) return;
            onSubmit(trimmed);
            setValue("");
        }
        const handleKeyDown = (e) => {
            if(e.key === "Enter" && !e.shiftKey){
                e.preventDefault();
                handleSubmit();
            }
        }

        if(variant === "glass"){
            return(
                <form onSubmit={handleSubmit} className="max-w-2xl w-full bg-white/10 backdrop-blur-xl 
                rounded-xl ring-1 ring-white/25 focus-within:ring-2
                 focus-within:ring-white/30 overflow-hiddenmt-6 transition">
                    <textarea ref={textareaRef} value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={handleKeyDown} 
                    placeholder={placeholder}
                    disabled={loading}
                    row={3}
                    className=""
                    >

                    </textarea>
                </form>
            )
        }
    return (
        <div>PromptInput</div>
    )
}

export default PromptInput