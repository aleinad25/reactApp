export function checkRefunds(data) {
  const refunds = [];
  for (let i = 1; i < data.data.lenght; i++) {
    const refund = {
      payroll: data.data[i][0],
      purchase_order: data.data[i][1],
      credit_note: data.data[i][2],
      recipient_account: data.data[i][3],
      account_type: data.data[i][4],
      bank: data.data[i][5],
      rut: data.data[i][6],
      client_name: data.data[i][7],
      amount: data.data[i][8],
      gloss: data.data[i][9],
      channel: data.data[i][10],
      email: data.data[i][11],
      phone: data.data[i][12]
    };
    refunds.push(refund);
  }
  return refunds;
}
