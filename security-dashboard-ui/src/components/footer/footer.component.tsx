function FooterComponent() {
  return (
    <footer className='w-full flex justify-between items-center bg-white p-1 text-xs'>
        <article className='font-bold'>
            NetworkStatus : <span className='text-green-600'>Online</span>
        </article>
         <article className='font-bold'>
            Copyright 2025. All rights reserved
        </article>
         <article className='font-bold bg-accent text-primary p-0.5 rounded-md'>
            Version : 2.02
        </article>
    </footer>
  )
}

export default FooterComponent;