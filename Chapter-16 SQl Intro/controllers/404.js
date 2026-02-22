export const Page404  = (req, res, next) =>{
	res.status(404).render('404page', { pageTitle :"404 Page Not Found", currPage : ""})
}