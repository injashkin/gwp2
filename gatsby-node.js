/**
 * В режиме разработки, после редактированиия этого файла нужно 
 * обязательно перезапускать проект командой npm run dev 
 */

exports.createPages = ({ actions }) => {
  const { createSlice } = actions
  createSlice({
    id: "header",
    component: require.resolve("./src/components/header.tsx"),
  })
  createSlice({
    id: "footer",
    component: require.resolve("./src/components/footer.tsx"),
  })
}
