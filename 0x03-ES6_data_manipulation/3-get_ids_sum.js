export default function getStudentIdsSum(stds) {
    return stds.reduce((acc, elem) => acc + elem.id, 0)
}