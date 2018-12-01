
const tempDataArray = [{
  full_name: 'bhagya',
  email: 'bhagyasah4u@gmail.com',
  gender: 'Male',
  state: 'State 2',
  phone_number: '98010174961',
  dob: '2018-3-15',
}];

const lables=['Account Name', 'Account Email', 'Gender', 'Mobile Number', 'State', 'DOB'];

const dataArray = tempDataArray.map(data => Object.values(data).map((item, idx) => ({ value: item, label: lables[idx] })));

console.log(dataArray);
