import { AddEdit } from '../../../components/users/AddEdit';
import { usercurdService } from '../../../services/usercurd.service';

export default AddEdit;

export async function getServerSideProps({ params }) {
    debugger
    console.log(params,"hello params")
    const user = await usercurdService.getById(params.id);

    return {
        props: { user }
    }
}