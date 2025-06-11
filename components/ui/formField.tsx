interface FormFieldProps {
  name: string
  label: string
  required: boolean
  placeholder?: string
  accept?: string
}
export const FileSelector = ({name, label, required, placeholder, accept}:FormFieldProps)=>{
            return(
                <div key={name} className="mb-4">
                    <input 
                    type="file" 
                    name={name}
                    id={name}
                    accept={accept || ".pdf"}
                    required={required}
                    className="border p2 w-full"
                    />
                </div>

            )
    
}