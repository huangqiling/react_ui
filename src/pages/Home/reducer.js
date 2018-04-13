let st = true;
export default function(state = '确定', action) {
  switch (action.type) {
    case 'ADD_TODO':
      st = !st;
      return st ? '确定' : '取消';
    default:
      return state;
  }
}
