export default async function HomeLayout({children}: {
  children: React.ReactNode
}){
  return (
    <div>
      <p>Home Layout</p>
      {children}
      </div>
  )
}