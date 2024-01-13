export function localStorage() {
  let setName = function (name) {
    window.localStorage.setItem('name', JSON.stringify(name))
    window.alert('gh')
  }
  let getName = function () {
    return window.localStorage.getItem('name')
  }

  return [setName, getName]
}
