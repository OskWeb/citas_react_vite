const Error = ({children}) => {
  return (
    <div className='bg-red-600 text-white p-2 mb-3'>
        <p>{children}</p>
    </div>
  )
}

export default Error