import "./styles.css"
import MenuList from './MenuList'

const Treeview = ({menus = []}) => {
  return (
    <div className='tree-view-container'>
      <MenuList list={menus} />
    </div>
  )
}

export default Treeview
