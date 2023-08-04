import RootLayout from "@/components/shared/layout"
import { GetStaticProps, NextPage } from "next"


export const HomePage:NextPage = (props) => {
  console.log("desde el front", props)
  return (
    <RootLayout>hello</RootLayout>
  )
}


export const getStaticProps: GetStaticProps = async (ctx) => {
  console.log("desde el back");

  return {
    props: {
		name:"jesus"
	},
  };
};

export default HomePage;