/* Original bilingual Decision Lab simulations; monetary outcomes are illustrative. */
window.CFA_DECISION_EXTRA={
  "corporate-law": {
    "authority-contracts": [
      {
        "item": {
          "title": "Hợp đồng vượt thẩm quyền|Unauthorized contract",
          "context": "Nhân viên có hạn mức phê duyệt 20.000 USD muốn ký đơn hàng 80.000 USD, đặt cọc không hoàn lại 10.000 USD.|An employee with a $20,000 approval limit proposes an $80,000 order with a non-refundable $10,000 deposit.",
          "task": "Bạn xử lý thế nào trước khi cam kết?|What should you do before committing?",
          "guidance": "Xác minh thẩm quyền thực tế và biểu kiến, quy trình phê duyệt và luật áp dụng. Không giả định hợp đồng tự động vô hiệu.|Verify actual and apparent authority, approvals and applicable law. Do not assume the contract is automatically void."
        },
        "decision": {
          "correct": 1,
          "options": [
            {
              "title": "Ký ngay và chuyển cọc|Sign and pay immediately",
              "delta": -10000,
              "reason": "Bỏ qua giới hạn thẩm quyền.|Ignores the authority limit.",
              "assumption": "Giả định đơn bị hủy và mất toàn bộ cọc.|Assume cancellation forfeits the deposit.",
              "metric": "Tiền đặt cọc được bảo vệ hoặc mất|Deposit protected or lost"
            },
            {
              "title": "Kiểm tra thẩm quyền và xin phê duyệt trước|Verify authority and obtain approval first",
              "delta": 10000,
              "reason": "Giữ tiền cho tới khi có phê duyệt.|Retains cash pending approval.",
              "assumption": "10.000 USD chưa đặt vào rủi ro; không phải lợi nhuận.|$10,000 not put at risk; not profit.",
              "metric": "Tiền đặt cọc được bảo vệ hoặc mất|Deposit protected or lost"
            },
            {
              "title": "Ký vì nghĩ công ty không bị ràng buộc|Sign assuming the company cannot be bound",
              "delta": -10000,
              "reason": "Thẩm quyền biểu kiến có thể tạo nghĩa vụ.|Apparent authority may bind the firm.",
              "assumption": "Giả định khoản cọc không thu hồi được.|Assume deposit is unrecoverable.",
              "metric": "Tiền đặt cọc được bảo vệ hoặc mất|Deposit protected or lost"
            }
          ]
        }
      }
    ],
    "distress-priority": [
      {
        "item": {
          "title": "Thu hồi nợ khi thanh lý|Liquidation recovery",
          "context": "Tài sản thanh lý 900.000 USD, nợ ưu tiên 100.000, nợ có bảo đảm 500.000, nợ không bảo đảm 600.000. Giả định thứ tự đúng như liệt kê, không có chi phí khác. Quỹ nắm 20% nợ không bảo đảm.|Liquidation proceeds $900,000; priority claims $100,000, secured $500,000, unsecured $600,000, in that stipulated order with no other costs. The fund holds 20% of unsecured claims.",
          "task": "Quỹ nên dự báo thu hồi bao nhiêu?|What recovery should the fund forecast?",
          "guidance": "Còn 300.000 USD sau nợ ưu tiên và có bảo đảm; quỹ nhận 20% = 60.000 USD. Quy định thực tế tùy pháp luật.|$300,000 remains after senior claims; the fund receives 20% = $60,000. Actual legal rules vary."
        },
        "decision": {
          "correct": 0,
          "options": [
            {
              "title": "60.000 USD|$60,000",
              "delta": 60000,
              "reason": "Áp dụng đúng thứ tự ưu tiên.|Correctly applies priority.",
              "assumption": "60.000 USD thu hồi mô phỏng; không phải lợi nhuận tăng thêm.|$60,000 modeled recovery; not incremental profit.",
              "metric": "Giá trị thu hồi xác định hoặc sai lệch dự báo|Recovery identified or forecast error"
            },
            {
              "title": "120.000 USD|$120,000",
              "delta": -60000,
              "reason": "Giả định trả đủ toàn bộ nợ không bảo đảm.|Assumes full unsecured recovery.",
              "assumption": "Dự báo cao hơn 60.000 USD.|Overstates recovery by $60,000.",
              "metric": "Giá trị thu hồi xác định hoặc sai lệch dự báo|Recovery identified or forecast error"
            },
            {
              "title": "180.000 USD|$180,000",
              "delta": -120000,
              "reason": "Bỏ qua các chủ nợ ưu tiên.|Ignores senior claims.",
              "assumption": "Dự báo cao hơn 120.000 USD.|Overstates recovery by $120,000.",
              "metric": "Giá trị thu hồi xác định hoặc sai lệch dự báo|Recovery identified or forecast error"
            }
          ]
        }
      }
    ]
  },
  "accounting-foundations": {
    "three-statements": [
      {
        "item": {
          "title": "Doanh thu chưa thu tiền|Sales without collection",
          "context": "Giao hàng đủ điều kiện ghi nhận 120.000 USD doanh thu, giá vốn 70.000 USD, khách chưa trả tiền. Bỏ qua thuế.|Goods are delivered and qualify for $120,000 revenue recognition; COGS $70,000; customer has not paid. Ignore tax.",
          "task": "Ghi nhận và lập ngân sách tiền mặt thế nào?|How should the transaction and cash budget be recorded?",
          "guidance": "Doanh thu và phải thu tăng 120.000; tồn kho giảm 70.000; lợi nhuận tăng 50.000; tiền mặt không đổi.|Revenue and receivables rise $120,000; inventory falls $70,000; profit rises $50,000; cash is unchanged."
        },
        "decision": {
          "correct": 1,
          "options": [
            {
              "title": "Coi doanh thu là tiền đã thu|Treat sales as collected cash",
              "delta": -120000,
              "reason": "Doanh thu dồn tích khác tiền.|Accrual revenue differs from cash.",
              "assumption": "Dự báo tiền cao hơn 120.000 USD.|Cash forecast overstated by $120,000.",
              "metric": "Sai lệch kế hoạch tiền mặt tránh được hoặc phát sinh|Cash planning error avoided or incurred"
            },
            {
              "title": "Ghi phải thu và giá vốn, chưa tăng tiền|Record receivable and COGS; no cash increase",
              "delta": 120000,
              "reason": "Liên kết đúng ba báo cáo.|Correctly links all three statements.",
              "assumption": "Tránh dựa vào 120.000 USD chưa thu.|Avoid budgeting $120,000 not yet collected.",
              "metric": "Sai lệch kế hoạch tiền mặt tránh được hoặc phát sinh|Cash planning error avoided or incurred"
            },
            {
              "title": "Coi lợi nhuận là tiền mặt|Treat profit as cash",
              "delta": -50000,
              "reason": "Lợi nhuận không đồng nghĩa tiền.|Profit is not cash.",
              "assumption": "Dự báo tiền cao hơn 50.000 USD.|Cash forecast overstated by $50,000.",
              "metric": "Sai lệch kế hoạch tiền mặt tránh được hoặc phát sinh|Cash planning error avoided or incurred"
            }
          ]
        }
      }
    ],
    "cost-allocation": [
      {
        "item": {
          "title": "Vốn hóa hay chi phí?|Capitalize or expense?",
          "context": "Thiết bị đủ điều kiện vốn hóa giá 100.000 USD, tuổi thọ 5 năm, giá trị còn lại 0. Sửa chữa thường xuyên 10.000 USD. Khấu hao đường thẳng đủ một năm.|Qualifying equipment costs $100,000, five-year life, zero residual. Routine repairs cost $10,000. Full-year straight-line depreciation.",
          "task": "Chi phí năm đầu là bao nhiêu?|What is year-one expense?",
          "guidance": "Khấu hao 20.000 cộng sửa chữa 10.000 = 30.000 USD; tiền đã chi 110.000 USD.|$20,000 depreciation plus $10,000 repairs = $30,000 expense; cash paid $110,000."
        },
        "decision": {
          "correct": 2,
          "options": [
            {
              "title": "110.000 USD, ghi chi phí hết|$110,000, expense everything",
              "delta": -80000,
              "reason": "Thiết bị tạo lợi ích nhiều kỳ.|Equipment benefits multiple periods.",
              "assumption": "Ghi thấp lợi nhuận 80.000 USD.|Understates profit by $80,000.",
              "metric": "Sai lệch lợi nhuận tránh được hoặc phát sinh|Profit misstatement avoided or incurred"
            },
            {
              "title": "22.000 USD, vốn hóa cả sửa chữa|$22,000, capitalize repairs too",
              "delta": -8000,
              "reason": "Sửa chữa thường xuyên là chi phí kỳ này.|Routine repairs are current expense.",
              "assumption": "Ghi cao lợi nhuận 8.000 USD.|Overstates profit by $8,000.",
              "metric": "Sai lệch lợi nhuận tránh được hoặc phát sinh|Profit misstatement avoided or incurred"
            },
            {
              "title": "30.000 USD, khấu hao và sửa chữa|$30,000, depreciation and repairs",
              "delta": 80000,
              "reason": "Phân biệt capex và opex.|Separates capex from opex.",
              "assumption": "Tránh sai lệch 80.000 USD so với ghi hết chi phí; không phải tiền tăng.|Avoids $80,000 error versus expensing everything; not cash gained.",
              "metric": "Sai lệch lợi nhuận tránh được hoặc phát sinh|Profit misstatement avoided or incurred"
            }
          ]
        }
      }
    ]
  },
  "ethics": {
    "mnpi": [
      {
        "item": {
          "title": "Thông tin chưa công bố|Material nonpublic information",
          "context": "Giám đốc tiết lộ riêng mất khách hàng lớn. Thông tin trọng yếu chưa công khai. Quỹ dự kiến giao dịch 200.000 USD.|A director privately reveals a major customer loss. The information is material and nonpublic. A $200,000 trade is contemplated.",
          "task": "Bạn nên làm gì?|What should you do?",
          "guidance": "Không giao dịch hoặc khiến người khác giao dịch dựa trên MNPI. Báo compliance và chờ công bố phù hợp.|Do not trade or cause others to trade on MNPI. Notify compliance and wait for appropriate dissemination."
        },
        "decision": {
          "correct": 1,
          "options": [
            {
              "title": "Bán ngay trước công bố|Sell before disclosure",
              "delta": -200000,
              "reason": "Giao dịch dựa trên MNPI.|Trades on MNPI.",
              "assumption": "200.000 USD giao dịch không phù hợp, không phải mức phạt.|$200,000 improper trade value, not a fine.",
              "metric": "Giá trị giao dịch không phù hợp được ngăn hoặc thực hiện|Improper trade value prevented or executed"
            },
            {
              "title": "Dừng giao dịch và báo compliance|Restrict trading and notify compliance",
              "delta": 200000,
              "reason": "Bảo vệ tính toàn vẹn thị trường.|Protects market integrity.",
              "assumption": "Ngăn giao dịch 200.000 USD; không phải lợi nhuận.|Prevents a $200,000 improper trade; not profit.",
              "metric": "Giá trị giao dịch không phù hợp được ngăn hoặc thực hiện|Improper trade value prevented or executed"
            },
            {
              "title": "Nhờ người quen bán thay|Ask an acquaintance to sell",
              "delta": -200000,
              "reason": "Chuyển cho người khác không loại bỏ vi phạm.|Tipping others does not cure the breach.",
              "assumption": "Giả định người đó giao dịch 200.000 USD.|Assume the tipped person trades $200,000.",
              "metric": "Giá trị giao dịch không phù hợp được ngăn hoặc thực hiện|Improper trade value prevented or executed"
            }
          ]
        }
      }
    ],
    "client-duties": [
      {
        "item": {
          "title": "Nhu cầu tiền mặt khách hàng|Client liquidity needs",
          "context": "Khách cần 150.000 USD sau 6 tháng để trả học phí. Cố vấn nhận hoa hồng cao khi bán quỹ khóa vốn 5 năm.|Client needs $150,000 for tuition in six months. Adviser earns a high commission on a five-year locked fund.",
          "task": "Chọn phương án phù hợp.|Choose a suitable action.",
          "guidance": "Ưu tiên nhu cầu thanh khoản, IPS và công bố xung đột lợi ích.|Prioritize liquidity, the IPS and conflict disclosure."
        },
        "decision": {
          "correct": 0,
          "options": [
            {
              "title": "Giữ 150.000 USD trong tài sản thanh khoản phù hợp|Keep $150,000 in suitable liquid assets",
              "delta": 150000,
              "reason": "Khớp kỳ hạn cần tiền.|Matches the cash horizon.",
              "assumption": "150.000 USD vẫn sẵn sàng, không phải lợi nhuận.|$150,000 remains available, not profit.",
              "metric": "Thanh khoản được bảo toàn hoặc bị khóa|Liquidity preserved or locked"
            },
            {
              "title": "Đưa toàn bộ vào quỹ khóa vốn|Invest all in the locked fund",
              "delta": -150000,
              "reason": "Không đáp ứng nhu cầu thanh khoản.|Fails the liquidity need.",
              "assumption": "150.000 USD bị khóa theo giả định.|$150,000 locked under assumed terms.",
              "metric": "Thanh khoản được bảo toàn hoặc bị khóa|Liquidity preserved or locked"
            },
            {
              "title": "Đưa một nửa vào quỹ để hưởng hoa hồng|Invest half for the commission",
              "delta": -75000,
              "reason": "Vẫn làm thiếu tiền khi đến hạn.|Leaves a known funding shortfall.",
              "assumption": "75.000 USD bị khóa.|$75,000 locked.",
              "metric": "Thanh khoản được bảo toàn hoặc bị khóa|Liquidity preserved or locked"
            }
          ]
        }
      }
    ]
  },
  "quantitative": {
    "tvm": [
      {
        "item": {
          "title": "Chọn thời điểm nhận tiền|Choose cash-flow timing",
          "context": "Nhà cung cấp cho chọn nhận 100.000 USD hôm nay, 110.000 USD sau một năm hoặc 119.000 USD sau hai năm. Lãi suất chiết khấu 8%/năm, rủi ro như nhau.|Choose $100,000 today, $110,000 in one year or $119,000 in two years. Discount rate 8% annually, equal risk.",
          "task": "Phương án có PV cao nhất?|Which option has the highest present value?",
          "guidance": "PV lần lượt 100.000; 101.851,85; 102.023,32 USD. Đưa dòng tiền về cùng mốc trước khi so.|PVs are $100,000, $101,851.85 and $102,023.32. Compare cash flows at the same date."
        },
        "decision": {
          "correct": 2,
          "options": [
            {
              "title": "Nhận 100.000 hôm nay|Take $100,000 today",
              "delta": -2023,
              "reason": "Bỏ qua phương án PV cao hơn.|Misses a higher-PV alternative.",
              "assumption": "Thấp hơn PV tốt nhất khoảng 2.023 USD.|About $2,023 below the best PV.",
              "metric": "Chênh lệch PV so với lựa chọn tốt nhất hoặc tiền ngay|PV advantage or shortfall"
            },
            {
              "title": "Nhận 110.000 sau một năm|Take $110,000 in one year",
              "delta": -171,
              "reason": "PV 101.852 USD, thấp hơn phương án hai năm.|PV $101,852 is below the two-year option.",
              "assumption": "Thấp hơn khoảng 171 USD.|About $171 below the best PV.",
              "metric": "Chênh lệch PV so với lựa chọn tốt nhất hoặc tiền ngay|PV advantage or shortfall"
            },
            {
              "title": "Nhận 119.000 sau hai năm|Take $119,000 in two years",
              "delta": 2023,
              "reason": "119.000 / 1,08² có PV cao nhất.|119,000 / 1.08² gives highest PV.",
              "assumption": "Cao hơn nhận ngay khoảng 2.023 USD.|About $2,023 above immediate cash.",
              "metric": "Chênh lệch PV so với lựa chọn tốt nhất hoặc tiền ngay|PV advantage or shortfall"
            }
          ]
        }
      }
    ],
    "probability": [
      {
        "item": {
          "title": "Phân bổ vốn theo kỳ vọng|Expected-value capital decision",
          "context": "Dự án A lãi 60.000 USD với xác suất 60%, lỗ 30.000 với xác suất 40%. B chắc chắn lãi 20.000. C chắc chắn lãi 10.000. Nhà đầu tư trung lập rủi ro.|A earns $60,000 with 60% probability, loses $30,000 with 40%. B earns certain $20,000. C earns certain $10,000. Investor is risk-neutral.",
          "task": "Chọn phương án tối đa hóa kỳ vọng.|Choose the highest expected value.",
          "guidance": "E(A) = 36.000 − 12.000 = 24.000 USD. Kỳ vọng không phải lợi nhuận chắc chắn.|E(A) = $36,000 − $12,000 = $24,000. Expected value is not guaranteed profit."
        },
        "decision": {
          "correct": 0,
          "options": [
            {
              "title": "Dự án A|Project A",
              "delta": 4000,
              "reason": "Kỳ vọng 24.000 USD cao nhất.|Highest expected value at $24,000.",
              "assumption": "Cao hơn B 4.000 USD theo kỳ vọng.|$4,000 above B in expectation.",
              "metric": "Chênh lệch lợi nhuận kỳ vọng|Expected profit difference"
            },
            {
              "title": "Dự án B|Project B",
              "delta": -4000,
              "reason": "An toàn hơn nhưng không tối đa kỳ vọng theo giả định.|Safer but not highest expected value under the assumption.",
              "assumption": "Kỳ vọng thấp hơn A 4.000 USD.|Expected value $4,000 below A.",
              "metric": "Chênh lệch lợi nhuận kỳ vọng|Expected profit difference"
            },
            {
              "title": "Dự án C|Project C",
              "delta": -14000,
              "reason": "Kỳ vọng thấp nhất.|Lowest expected value.",
              "assumption": "Kỳ vọng thấp hơn A 14.000 USD.|Expected value $14,000 below A.",
              "metric": "Chênh lệch lợi nhuận kỳ vọng|Expected profit difference"
            }
          ]
        }
      }
    ]
  },
  "economics": {
    "supply-demand": [
      {
        "item": {
          "title": "Tăng giá khi cầu co giãn|Pricing with elastic demand",
          "context": "Cửa hàng bán 10.000 đơn vị/tháng giá 20 USD. Ước tính khi tăng giá 10%, lượng bán giảm 20%; khi giảm giá 10%, lượng tăng 20%.|A store sells 10,000 units monthly at $20. A 10% price increase cuts quantity 20%; a 10% price cut increases quantity 20%.",
          "task": "Nếu mục tiêu chỉ là doanh thu tháng, chọn phương án nào?|If the sole objective is monthly revenue, choose which action?",
          "guidance": "Doanh thu ban đầu 200.000; tăng giá: 176.000; giảm giá: 216.000 USD. Cần xem thêm chi phí nếu mục tiêu là lợi nhuận.|Initial revenue $200,000; increase: $176,000; cut: $216,000. Consider costs if maximizing profit."
        },
        "decision": {
          "correct": 2,
          "options": [
            {
              "title": "Tăng giá 10%|Raise price 10%",
              "delta": -24000,
              "reason": "Cầu giảm mạnh hơn giá tăng.|Quantity falls more than price rises.",
              "assumption": "22 × 8.000 = 176.000 USD.|$22 × 8,000 = $176,000.",
              "metric": "Thay đổi doanh thu tháng so với mức ban đầu|Monthly revenue change versus baseline"
            },
            {
              "title": "Giữ giá|Keep price",
              "delta": -16000,
              "reason": "Không đạt doanh thu tối đa.|Does not maximize revenue.",
              "assumption": "Bỏ lỡ 16.000 USD so với giảm giá; doanh thu thực không đổi.|Foregoes $16,000 versus cutting; actual revenue unchanged.",
              "metric": "Thay đổi doanh thu tháng so với mức ban đầu|Monthly revenue change versus baseline"
            },
            {
              "title": "Giảm giá 10%|Cut price 10%",
              "delta": 16000,
              "reason": "Lượng tăng đủ bù giá giảm.|Volume gains outweigh price cut.",
              "assumption": "18 × 12.000 = 216.000 USD.|$18 × 12,000 = $216,000.",
              "metric": "Thay đổi doanh thu tháng so với mức ban đầu|Monthly revenue change versus baseline"
            }
          ]
        }
      }
    ],
    "fx": [
      {
        "item": {
          "title": "Rủi ro tỷ giá hàng nhập khẩu|Importer currency exposure",
          "context": "Công ty phải trả 500.000 EUR sau ba tháng. Hiện tỷ giá 1,10 USD/EUR; tỷ giá kỳ hạn là 1,11. Giả định đến hạn spot 1,16. Bỏ qua phí.|An importer owes EUR 500,000 in three months. Spot is $1.10/EUR; forward $1.11; assumed maturity spot $1.16. Ignore fees.",
          "task": "Nếu muốn chắc chắn chi phí USD, quyết định nào phù hợp?|Which decision locks the USD payment?",
          "guidance": "Mua EUR kỳ hạn đúng số tiền và kỳ hạn. Chi phí khóa 555.000 USD; không hedge trong kịch bản này là 580.000 USD.|Buy EUR forward in the matching amount and maturity. Locked cost $555,000; unhedged cost in this scenario $580,000."
        },
        "decision": {
          "correct": 1,
          "options": [
            {
              "title": "Không hedge|Remain unhedged",
              "delta": -25000,
              "reason": "Chịu rủi ro EUR tăng giá.|Exposed to EUR appreciation.",
              "assumption": "580.000 − 555.000 = 25.000 USD.|$580,000 − $555,000 = $25,000.",
              "metric": "Tiết kiệm hoặc chi phí tăng so với hedge đủ|Savings or extra cost versus hedge"
            },
            {
              "title": "Mua kỳ hạn 500.000 EUR|Buy EUR 500,000 forward",
              "delta": 25000,
              "reason": "Khóa nghĩa vụ thanh toán.|Locks the payment obligation.",
              "assumption": "Tiết kiệm 25.000 USD so với không hedge trong kịch bản này.|Saves $25,000 versus unhedged in this scenario.",
              "metric": "Tiết kiệm hoặc chi phí tăng so với hedge đủ|Savings or extra cost versus hedge"
            },
            {
              "title": "Hedge một nửa|Hedge half",
              "delta": -12500,
              "reason": "Một nửa vẫn biến động.|Half remains exposed.",
              "assumption": "Chi 567.500 USD, cao hơn hedge đủ 12.500.|Pays $567,500, $12,500 above full hedge.",
              "metric": "Tiết kiệm hoặc chi phí tăng so với hedge đủ|Savings or extra cost versus hedge"
            }
          ]
        }
      }
    ]
  },
  "fsa": {
    "cash-quality": [
      {
        "item": {
          "title": "Lợi nhuận cao nhưng tiền yếu|Profit rises, cash weakens",
          "context": "Lợi nhuận ròng 200.000 USD, khấu hao 40.000, phải thu tăng 150.000, tồn kho tăng 80.000, phải trả tăng 20.000; không có điều chỉnh khác.|Net income $200,000, depreciation $40,000, receivables rise $150,000, inventory rises $80,000, payables rise $20,000; no other adjustments.",
          "task": "CFO là bao nhiêu và nên làm gì?|What is CFO and what should you do?",
          "guidance": "CFO = 200.000 + 40.000 − 150.000 − 80.000 + 20.000 = 30.000 USD; kiểm tra thu tiền và tồn kho.|CFO = $200,000 + $40,000 − $150,000 − $80,000 + $20,000 = $30,000; investigate collections and inventory."
        },
        "decision": {
          "correct": 1,
          "options": [
            {
              "title": "CFO 240.000 USD; bỏ qua vốn lưu động|CFO $240,000; ignore working capital",
              "delta": -210000,
              "reason": "Không điều chỉnh thay đổi vốn lưu động.|Omits working-capital changes.",
              "assumption": "Ghi cao 210.000 USD.|Overstates by $210,000.",
              "metric": "Sai lệch dự báo CFO tránh được hoặc phát sinh|CFO forecasting error avoided or incurred"
            },
            {
              "title": "CFO 30.000 USD; kiểm tra chất lượng tiền|CFO $30,000; investigate cash quality",
              "delta": 170000,
              "reason": "Tách lợi nhuận và tiền thực.|Distinguishes earnings from cash.",
              "assumption": "Tránh coi 200.000 USD lợi nhuận là CFO, sai lệch 170.000.|Avoids a $170,000 error from equating income with CFO.",
              "metric": "Sai lệch dự báo CFO tránh được hoặc phát sinh|CFO forecasting error avoided or incurred"
            },
            {
              "title": "CFO 200.000 USD; lợi nhuận bằng tiền|CFO $200,000; profit equals cash",
              "delta": -170000,
              "reason": "Không tính các điều chỉnh.|Ignores adjustments.",
              "assumption": "Ghi cao 170.000 USD.|Overstates by $170,000.",
              "metric": "Sai lệch dự báo CFO tránh được hoặc phát sinh|CFO forecasting error avoided or incurred"
            }
          ]
        }
      }
    ],
    "forecast": [
      {
        "item": {
          "title": "Dự báo biên lợi nhuận|Forecast operating margin",
          "context": "Doanh thu hiện tại 2 triệu USD, biên hoạt động 15%. Dự báo doanh thu tăng 10%, nhưng chi phí khiến biên giảm còn 12%.|Current revenue $2m, operating margin 15%. Forecast sales growth 10%, but cost pressure lowers margin to 12%.",
          "task": "EBIT kỳ tới và thay đổi so hiện tại?|What are next-period EBIT and change from current EBIT?",
          "guidance": "EBIT hiện tại 300.000, dự báo 2,2 triệu × 12% = 264.000 USD; giảm 36.000.|Current EBIT $300,000; forecast $2.2m × 12% = $264,000, down $36,000."
        },
        "decision": {
          "correct": 0,
          "options": [
            {
              "title": "264.000 USD; giảm 36.000|$264,000; down $36,000",
              "delta": 66000,
              "reason": "Kết hợp tăng doanh thu và co biên.|Combines revenue growth and margin compression.",
              "assumption": "Tránh ghi cao 66.000 USD nếu giữ biên 15%.|Avoids $66,000 overstatement from keeping 15% margin.",
              "metric": "Sai lệch dự báo EBIT tránh được hoặc phát sinh|EBIT forecast error avoided or incurred"
            },
            {
              "title": "330.000 USD; tăng 30.000|$330,000; up $30,000",
              "delta": -66000,
              "reason": "Giữ biên cũ bất chấp dữ kiện.|Keeps old margin despite evidence.",
              "assumption": "Ghi cao 66.000 USD.|Overstates by $66,000.",
              "metric": "Sai lệch dự báo EBIT tránh được hoặc phát sinh|EBIT forecast error avoided or incurred"
            },
            {
              "title": "300.000 USD; không đổi|$300,000; unchanged",
              "delta": -36000,
              "reason": "Bỏ qua thay đổi doanh thu và chi phí.|Ignores growth and cost changes.",
              "assumption": "Ghi cao 36.000 USD.|Overstates by $36,000.",
              "metric": "Sai lệch dự báo EBIT tránh được hoặc phát sinh|EBIT forecast error avoided or incurred"
            }
          ]
        }
      }
    ]
  },
  "corporate-finance": {
    "npv": [
      {
        "item": {
          "title": "Phê duyệt dự án đầu tư|Approve a capital project",
          "context": "Dự án chi ngay 100.000 USD, thu 60.000 cuối mỗi năm trong hai năm, chiết khấu 10%. Không giá trị thanh lý.|A project costs $100,000 now and returns $60,000 at each of the next two year-ends. Discount rate 10%; no terminal value.",
          "task": "Công ty nên quyết định thế nào theo NPV?|What is the NPV-based decision?",
          "guidance": "NPV = −100.000 + 60.000/1,10 + 60.000/1,10² = khoảng 4.132 USD. Giả định dòng tiền và rủi ro phù hợp.|NPV = −$100,000 + $60,000/1.10 + $60,000/1.10² ≈ $4,132, assuming valid cash flows and risk."
        },
        "decision": {
          "correct": 2,
          "options": [
            {
              "title": "Từ chối vì vốn ban đầu lớn|Reject due to large upfront cost",
              "delta": -4132,
              "reason": "Chi phí ban đầu không đủ để quyết định.|Upfront cost alone is not decisive.",
              "assumption": "Bỏ lỡ NPV dương khoảng 4.132 USD.|Foregoes positive NPV of about $4,132.",
              "metric": "Giá trị hiện tại ròng hoặc giá trị bỏ lỡ|NPV or value forgone"
            },
            {
              "title": "Phê duyệt nhưng ghi NPV 20.000|Approve but report $20,000 NPV",
              "delta": -15868,
              "reason": "20.000 là dòng tiền ròng chưa chiết khấu.|$20,000 is undiscounted net cash.",
              "assumption": "Ghi cao NPV khoảng 15.868 USD.|Overstates NPV by about $15,868.",
              "metric": "Giá trị hiện tại ròng hoặc giá trị bỏ lỡ|NPV or value forgone"
            },
            {
              "title": "Phê duyệt nếu các giả định vững; NPV khoảng 4.132|Approve if assumptions hold; NPV about $4,132",
              "delta": 4132,
              "reason": "NPV dương tạo giá trị theo giả định.|Positive NPV creates modeled value.",
              "assumption": "NPV khoảng 4.132 USD.|NPV about $4,132.",
              "metric": "Giá trị hiện tại ròng hoặc giá trị bỏ lỡ|NPV or value forgone"
            }
          ]
        }
      }
    ],
    "working-capital": [
      {
        "item": {
          "title": "Giải phóng vốn lưu động|Release working capital",
          "context": "Doanh thu tín dụng đều 3,65 triệu USD/năm. DSO 60 ngày. Có thể giảm DSO còn 45 ngày không mất khách; chi phí hệ thống thu nợ một lần 10.000 USD. Năm 365 ngày.|Credit sales are $3.65m annually, evenly distributed. DSO 60 days. Can reduce to 45 without losing customers; one-time collection-system cost $10,000. 365-day year.",
          "task": "Chọn phương án cải thiện thanh khoản.|Choose the liquidity improvement.",
          "guidance": "Doanh thu/ngày 10.000 USD; giảm 15 ngày giải phóng 150.000 USD phải thu, trừ chi phí 10.000 còn 140.000 tiền ròng.|Daily sales $10,000; 15-day reduction releases $150,000 receivables, less $10,000 cost = $140,000 net cash."
        },
        "decision": {
          "correct": 0,
          "options": [
            {
              "title": "Giảm DSO còn 45 ngày|Reduce DSO to 45 days",
              "delta": 140000,
              "reason": "Thu tiền sớm giảm vốn bị giam.|Faster collections free capital.",
              "assumption": "15 × 10.000 − 10.000 = 140.000 USD.|15 × $10,000 − $10,000 = $140,000.",
              "metric": "Tiền mặt ròng giải phóng hoặc bỏ lỡ|Net cash released or forgone"
            },
            {
              "title": "Giữ nguyên DSO|Keep DSO unchanged",
              "delta": -140000,
              "reason": "Không giải phóng vốn có thể thu.|Misses cash release.",
              "assumption": "Bỏ lỡ 140.000 USD tiền ròng theo giả định.|Foregoes $140,000 net cash.",
              "metric": "Tiền mặt ròng giải phóng hoặc bỏ lỡ|Net cash released or forgone"
            },
            {
              "title": "Nới DSO thêm 15 ngày|Extend DSO by 15 days",
              "delta": -150000,
              "reason": "Tăng khoản phải thu.|Increases receivables.",
              "assumption": "15 × 10.000 = 150.000 USD bị giam thêm.|15 × $10,000 = $150,000 more tied up.",
              "metric": "Tiền mặt ròng giải phóng hoặc bỏ lỡ|Net cash released or forgone"
            }
          ]
        }
      }
    ]
  },
  "equity": {
    "valuation": [
      {
        "item": {
          "title": "Định giá cổ phiếu bằng DDM|Dividend discount valuation",
          "context": "Cổ tức kỳ tới 3 USD/cổ phiếu, tăng trưởng dài hạn 4%, chi phí vốn cổ phần 10%. Giá thị trường 60 USD. Quỹ cân nhắc 1.000 cổ phiếu.|Next dividend $3/share, long-term growth 4%, cost of equity 10%, market price $60. Fund considers 1,000 shares.",
          "task": "Quyết định nào phù hợp với Gordon model nếu cần margin of safety?|Which Gordon-model decision fits a required margin of safety?",
          "guidance": "V = 3/(0,10−0,04)=50 USD; giá 60 cao hơn giá trị mô hình. Kiểm tra độ nhạy và không xem giá trị là chắc chắn.|V = 3/(0.10−0.04) = $50; market $60 is above modeled value. Test sensitivity; value is not certain."
        },
        "decision": {
          "correct": 1,
          "options": [
            {
              "title": "Mua 1.000 cổ phiếu tại 60|Buy 1,000 at $60",
              "delta": -10000,
              "reason": "Trả cao hơn giá trị mô hình 10 USD/cp.|Pays $10/share above modeled value.",
              "assumption": "1.000 × 10 = 10.000 USD chênh lệch.|1,000 × $10 = $10,000 premium.",
              "metric": "Khoản trả vượt giá trị mô hình tránh được hoặc phát sinh|Modeled overpayment avoided or incurred"
            },
            {
              "title": "Đưa vào watchlist; chờ mức giá có biên an toàn|Watchlist; wait for a margin of safety",
              "delta": 10000,
              "reason": "Không nhầm chất lượng với mức giá hợp lý.|Separates quality from price.",
              "assumption": "Tránh trả vượt mô hình 10.000 USD, không phải lãi thực hiện.|Avoids $10,000 modeled overpayment, not realized profit.",
              "metric": "Khoản trả vượt giá trị mô hình tránh được hoặc phát sinh|Modeled overpayment avoided or incurred"
            },
            {
              "title": "Mua gấp đôi vì cổ tức tăng|Buy twice as much because dividend grows",
              "delta": -20000,
              "reason": "Tăng quy mô mà không có biên an toàn.|Increases exposure without margin of safety.",
              "assumption": "2.000 × 10 = 20.000 USD chênh lệch.|2,000 × $10 = $20,000 premium.",
              "metric": "Khoản trả vượt giá trị mô hình tránh được hoặc phát sinh|Modeled overpayment avoided or incurred"
            }
          ]
        }
      }
    ],
    "forecast-roic": [
      {
        "item": {
          "title": "Tăng trưởng tạo giá trị?|Does growth create value?",
          "context": "Một đơn vị kinh doanh tái đầu tư 500.000 USD với ROIC tăng thêm 8%, WACC 11%. Đơn vị khác có cùng nhu cầu vốn, ROIC 15%. Giả định các tỷ suất duy trì trong năm.|One division reinvests $500,000 at incremental ROIC 8%, WACC 11%. Another needs the same capital at ROIC 15%. Assume annual rates hold.",
          "task": "Nên phân bổ vốn vào đâu nếu rủi ro tương đương?|Where should capital go if risk is comparable?",
          "guidance": "Lợi nhuận kinh tế = (ROIC − WACC) × vốn. Đơn vị A −15.000, B +20.000 USD/năm.|Economic profit = (ROIC − WACC) × capital. A −$15,000, B +$20,000 annually."
        },
        "decision": {
          "correct": 2,
          "options": [
            {
              "title": "Đầu tư toàn bộ A|Allocate all to A",
              "delta": -15000,
              "reason": "ROIC thấp hơn WACC.|ROIC below WACC.",
              "assumption": "500.000 × (8%−11%) = −15.000.|$500,000 × (8%−11%) = −$15,000.",
              "metric": "Lợi nhuận kinh tế năm|Annual economic profit"
            },
            {
              "title": "Chia đều hai bên|Split equally",
              "delta": 2500,
              "reason": "Tạo giá trị ít hơn B.|Creates less value than B.",
              "assumption": "250.000 × (−3%+4%) = 2.500.|$250,000 × (−3%+4%) = $2,500.",
              "metric": "Lợi nhuận kinh tế năm|Annual economic profit"
            },
            {
              "title": "Đầu tư B, kiểm tra sức chứa và giả định ROIC|Allocate to B; verify capacity and ROIC",
              "delta": 20000,
              "reason": "ROIC cao hơn WACC.|ROIC exceeds WACC.",
              "assumption": "500.000 × (15%−11%) = 20.000.|$500,000 × (15%−11%) = $20,000.",
              "metric": "Lợi nhuận kinh tế năm|Annual economic profit"
            }
          ]
        }
      }
    ]
  },
  "fixed-income": {
    "duration-convexity": [
      {
        "item": {
          "title": "Lãi suất tăng và duration|Rate shock and duration",
          "context": "Danh mục trái phiếu 2 triệu USD, modified duration 6. Dự báo stress lợi suất tăng 1 điểm %. Có thể chuyển sang danh mục duration 3, cùng quy mô. Bỏ qua convexity và chi phí.|A $2m bond portfolio has modified duration 6. Stress yields rise 1 percentage point. Can switch to duration 3 at equal market value. Ignore convexity and costs.",
          "task": "Nếu mục tiêu giảm rủi ro lãi suất, chọn phương án nào?|Which action reduces interest-rate risk?",
          "guidance": "ΔP/P ≈ −Dmod × Δy. Duration 6 giảm 120.000; duration 3 giảm 60.000. Không phải dự báo chắc chắn.|ΔP/P ≈ −Dmod × Δy. Duration 6 loses $120,000; duration 3 loses $60,000. Stress, not a forecast."
        },
        "decision": {
          "correct": 1,
          "options": [
            {
              "title": "Giữ duration 6|Keep duration 6",
              "delta": -60000,
              "reason": "Không giảm độ nhạy.|Does not reduce sensitivity.",
              "assumption": "Bỏ lỡ giảm lỗ 60.000 USD so với duration 3.|Foregoes $60,000 loss reduction versus duration 3.",
              "metric": "Mức lỗ stress giảm hoặc tăng so với ban đầu|Stress loss reduction or increase"
            },
            {
              "title": "Giảm duration còn 3|Reduce duration to 3",
              "delta": 60000,
              "reason": "Giảm độ nhạy với lợi suất.|Reduces yield sensitivity.",
              "assumption": "Lỗ stress giảm 120.000 xuống 60.000 USD.|Stress loss falls from $120,000 to $60,000.",
              "metric": "Mức lỗ stress giảm hoặc tăng so với ban đầu|Stress loss reduction or increase"
            },
            {
              "title": "Tăng duration lên 9|Raise duration to 9",
              "delta": -60000,
              "reason": "Tăng độ nhạy lãi suất.|Increases rate sensitivity.",
              "assumption": "Lỗ stress 180.000, cao hơn ban đầu 60.000.|Stress loss $180,000, $60,000 above baseline.",
              "metric": "Mức lỗ stress giảm hoặc tăng so với ban đầu|Stress loss reduction or increase"
            }
          ]
        }
      }
    ],
    "credit": [
      {
        "item": {
          "title": "Rủi ro tín dụng và thu hồi|Credit loss and recovery",
          "context": "Khoản đầu tư trái phiếu 1 triệu USD, xác suất vỡ nợ 4% trong năm, recovery 40%. Phí bảo hiểm tín dụng giả định 15.000 USD, bù đủ tổn thất vỡ nợ, không có rủi ro đối tác.|A $1m bond has annual default probability 4%, recovery 40%. Hypothetical credit protection costs $15,000 and covers full default loss, no counterparty risk.",
          "task": "Theo chi phí kỳ vọng đơn giản, có nên mua bảo hiểm?|On simple expected cost, buy protection?",
          "guidance": "EL = PD × LGD × EAD = 4% × 60% × 1m = 24.000 USD. Bảo hiểm 15.000 giảm chi phí kỳ vọng 9.000.|EL = PD × LGD × EAD = 4% × 60% × $1m = $24,000. Protection at $15,000 saves $9,000 in expected cost."
        },
        "decision": {
          "correct": 0,
          "options": [
            {
              "title": "Mua bảo hiểm toàn bộ|Buy full protection",
              "delta": 9000,
              "reason": "Phí thấp hơn expected loss.|Premium below expected loss.",
              "assumption": "24.000 − 15.000 = 9.000 USD kỳ vọng.|$24,000 − $15,000 = $9,000 expected.",
              "metric": "Chi phí kỳ vọng tiết kiệm hoặc bỏ lỡ|Expected cost saved or forgone"
            },
            {
              "title": "Không bảo hiểm vì PD chỉ 4%|Remain unprotected because PD is only 4%",
              "delta": -9000,
              "reason": "Bỏ qua quy mô tổn thất khi vỡ nợ.|Ignores loss severity.",
              "assumption": "Bỏ lỡ 9.000 USD tiết kiệm kỳ vọng.|Foregoes $9,000 expected savings.",
              "metric": "Chi phí kỳ vọng tiết kiệm hoặc bỏ lỡ|Expected cost saved or forgone"
            },
            {
              "title": "Định giá expected loss là 16.000|Estimate expected loss at $16,000",
              "delta": -8000,
              "reason": "Dùng recovery thay vì LGD.|Uses recovery instead of LGD.",
              "assumption": "Ghi thấp expected loss 8.000 USD.|Understates expected loss by $8,000.",
              "metric": "Chi phí kỳ vọng tiết kiệm hoặc bỏ lỡ|Expected cost saved or forgone"
            }
          ]
        }
      }
    ]
  },
  "derivatives": {
    "forwards-futures": [
      {
        "item": {
          "title": "Khóa giá nguyên liệu|Hedge input price",
          "context": "Nhà máy cần 10.000 đơn vị nguyên liệu sau 3 tháng; futures mua giá 50 USD/đơn vị, giả định spot và futures tại đáo hạn 58 USD. Không phí và không basis risk.|A factory needs 10,000 units in three months. Long futures price $50/unit; maturity spot and futures assumed $58. No fees or basis risk.",
          "task": "Vị thế nào bảo vệ chi phí mua?|Which position hedges purchase cost?",
          "guidance": "Long futures lãi 8 USD/đơn vị bù giá mua tăng; short futures làm tăng rủi ro.|Long futures gain $8/unit offsets the higher purchase price; short futures increase exposure."
        },
        "decision": {
          "correct": 2,
          "options": [
            {
              "title": "Short 10.000 đơn vị|Short 10,000 units",
              "delta": -80000,
              "reason": "Sai hướng hedge với nghĩa vụ mua.|Wrong hedge direction for a buyer.",
              "assumption": "10.000 × (50−58) = −80.000 USD.|10,000 × ($50−$58) = −$80,000.",
              "metric": "Lãi/lỗ futures trong kịch bản|Futures P/L in scenario"
            },
            {
              "title": "Không hedge|No hedge",
              "delta": -80000,
              "reason": "Chịu tăng chi phí nguyên liệu.|Exposed to higher input costs.",
              "assumption": "Chi phí mua cao hơn mức khóa 80.000 USD; không có futures P/L.|Purchase cost $80,000 above locked cost; no futures P/L.",
              "metric": "Lãi/lỗ futures trong kịch bản|Futures P/L in scenario"
            },
            {
              "title": "Long 10.000 đơn vị|Long 10,000 units",
              "delta": 80000,
              "reason": "Lãi futures bù tăng giá mua.|Futures gain offsets higher input prices.",
              "assumption": "10.000 × (58−50) = 80.000 USD, bù chi phí mua.|10,000 × ($58−$50) = $80,000, offsetting purchase cost.",
              "metric": "Lãi/lỗ futures trong kịch bản|Futures P/L in scenario"
            }
          ]
        }
      }
    ],
    "options-greeks": [
      {
        "item": {
          "title": "Bảo vệ danh mục cổ phiếu|Protect an equity holding",
          "context": "Nắm 1.000 cổ phiếu giá 100 USD. Mua put strike 95, premium 3 USD/cp. Đáo hạn giá 80. Bỏ qua phí khác.|Hold 1,000 shares at $100. Put strike $95, premium $3/share. Maturity price $80. Ignore other fees.",
          "task": "Nếu cần giữ upside và hạn chế downside, chọn phương án nào?|Which strategy retains upside while limiting downside?",
          "guidance": "Protective put: giá trị cuối kỳ 95.000, trừ premium 3.000 so với chi phí cổ phiếu 100.000, lỗ 8.000. Không hedge lỗ 20.000.|Protective put: ending value $95,000, less $3,000 premium versus $100,000 stock cost, loss $8,000. Unhedged loss $20,000."
        },
        "decision": {
          "correct": 1,
          "options": [
            {
              "title": "Giữ không hedge|Hold unhedged",
              "delta": -12000,
              "reason": "Chịu toàn bộ downside.|Bears full downside.",
              "assumption": "Lỗ 20.000, nhiều hơn protective put 12.000 USD.|$20,000 loss, $12,000 worse than protective put.",
              "metric": "Mức lỗ giảm hoặc tăng trong kịch bản|Scenario loss reduction or increase"
            },
            {
              "title": "Mua 1.000 put tương ứng|Buy protective puts for 1,000 shares",
              "delta": 12000,
              "reason": "Put tạo sàn giá trị sau premium.|Put creates a floor net of premium.",
              "assumption": "Giảm lỗ từ 20.000 xuống 8.000 USD.|Reduces loss from $20,000 to $8,000.",
              "metric": "Mức lỗ giảm hoặc tăng trong kịch bản|Scenario loss reduction or increase"
            },
            {
              "title": "Bán put thay vì mua|Sell puts instead",
              "delta": -12000,
              "reason": "Short put làm tăng downside.|Short puts add downside.",
              "assumption": "Put lỗ ròng 12 USD/cp, thêm 12.000 USD so với không hedge.|Short put loses $12/share net, adding $12,000 versus unhedged.",
              "metric": "Mức lỗ giảm hoặc tăng trong kịch bản|Scenario loss reduction or increase"
            }
          ]
        }
      }
    ]
  },
  "alternatives": {
    "real-assets": [
      {
        "item": {
          "title": "Định giá bất động sản cho thuê|Value a rental property",
          "context": "NOI ổn định 120.000 USD/năm, cap rate thị trường 6%, giá chào 2,4 triệu USD. Bỏ qua chi phí giao dịch và giả định NOI đại diện.|Stabilized NOI $120,000/year, market cap rate 6%, asking price $2.4m. Ignore transaction costs; assume representative NOI.",
          "task": "Mức giá chỉ báo và quyết định phù hợp?|What is indicated value and a suitable action?",
          "guidance": "V = NOI/cap rate = 2 triệu USD. Kiểm tra NOI, cap rate, capex trước khi mua.|V = NOI/cap rate = $2m. Verify NOI, cap rate and capex before buying."
        },
        "decision": {
          "correct": 0,
          "options": [
            {
              "title": "Thẩm định và đàm phán quanh 2 triệu hoặc thấp hơn|Underwrite and negotiate around $2m or lower",
              "delta": 400000,
              "reason": "Giá chào vượt giá trị chỉ báo.|Asking price exceeds indicated value.",
              "assumption": "Tránh mức premium 400.000 USD; không phải lợi nhuận.|Avoids $400,000 modeled premium; not profit.",
              "metric": "Khoản trả vượt giá trị chỉ báo tránh được hoặc phát sinh|Indicated overpayment avoided or incurred"
            },
            {
              "title": "Mua ngay tại 2,4 triệu|Buy immediately at $2.4m",
              "delta": -400000,
              "reason": "Cap rate thực chỉ 5%.|Implied cap rate only 5%.",
              "assumption": "2,4m − 2m = 400.000 USD.|$2.4m − $2m = $400,000.",
              "metric": "Khoản trả vượt giá trị chỉ báo tránh được hoặc phát sinh|Indicated overpayment avoided or incurred"
            },
            {
              "title": "Định giá 3 triệu từ cap rate 4% không có bằng chứng|Assume 4% cap rate without evidence and pay $3m",
              "delta": -1000000,
              "reason": "Cap rate thấp hơn cần bằng chứng.|Lower cap rate requires evidence.",
              "assumption": "3m − 2m = 1 triệu USD premium.|$3m − $2m = $1m premium.",
              "metric": "Khoản trả vượt giá trị chỉ báo tránh được hoặc phát sinh|Indicated overpayment avoided or incurred"
            }
          ]
        }
      }
    ],
    "features-fees": [
      {
        "item": {
          "title": "Dự trữ thanh khoản cho capital call|Fund a capital call",
          "context": "Quỹ có 300.000 USD tiền mặt, capital call chắc chắn 200.000 USD sau 30 ngày. Một khoản đầu tư mới khóa vốn đòi 250.000 USD ngay.|Fund has $300,000 cash and a confirmed $200,000 capital call in 30 days. A new illiquid investment requires $250,000 now.",
          "task": "Nên phân bổ tối đa bao nhiêu nếu không vay và không có dòng tiền mới?|Maximum allocation without borrowing or new inflows?",
          "guidance": "Dự trữ đủ 200.000 cho capital call; tối đa 100.000 còn lại, trước đệm thanh khoản khác.|Reserve $200,000 for the capital call; at most $100,000 remains before other liquidity buffers."
        },
        "decision": {
          "correct": 2,
          "options": [
            {
              "title": "Đầu tư 250.000 USD|Invest $250,000",
              "delta": -150000,
              "reason": "Chỉ còn 50.000 tiền mặt.|Only $50,000 cash remains.",
              "assumption": "Thiếu 150.000 USD khi call đến hạn.|$150,000 shortfall at call.",
              "metric": "Thanh khoản dự trữ hoặc thiếu hụt|Liquidity reserved or shortfall"
            },
            {
              "title": "Đầu tư 200.000 USD|Invest $200,000",
              "delta": -100000,
              "reason": "Chỉ còn 100.000 tiền mặt.|Only $100,000 cash remains.",
              "assumption": "Thiếu 100.000 USD.|$100,000 shortfall.",
              "metric": "Thanh khoản dự trữ hoặc thiếu hụt|Liquidity reserved or shortfall"
            },
            {
              "title": "Tối đa 100.000 USD, dự trữ phần còn lại|At most $100,000; reserve remainder",
              "delta": 200000,
              "reason": "Đủ nghĩa vụ chắc chắn.|Funds known obligation.",
              "assumption": "200.000 USD thanh khoản được giữ, không phải lợi nhuận.|$200,000 liquidity retained, not profit.",
              "metric": "Thanh khoản dự trữ hoặc thiếu hụt|Liquidity reserved or shortfall"
            }
          ]
        }
      }
    ]
  },
  "portfolio": {
    "risk-return": [
      {
        "item": {
          "title": "Đa dạng hóa danh mục|Diversify portfolio risk",
          "context": "Hai tài sản có volatility 20%, tương quan 0, tỷ trọng 50/50. Danh mục 1 triệu USD. So với nắm riêng một tài sản, giả định cùng expected return.|Two assets have 20% volatility, zero correlation, equal weights. Portfolio $1m. Compare with holding either alone; equal expected returns assumed.",
          "task": "Volatility danh mục và lựa chọn nào phù hợp để giảm rủi ro?|Which allocation reduces risk and what is volatility?",
          "guidance": "σp = √(0,5²×0,2² + 0,5²×0,2²) = 14,14%. Volatility không phải khoản lỗ thực.|σp = √(0.5²×0.2² + 0.5²×0.2²) = 14.14%. Volatility is not realized loss."
        },
        "decision": {
          "correct": 1,
          "options": [
            {
              "title": "Nắm một tài sản vì return giống nhau|Hold one asset because returns are equal",
              "delta": -58579,
              "reason": "Bỏ qua đa dạng hóa.|Ignores diversification.",
              "assumption": "Bỏ lỡ giảm biến động 58.579 USD (1σ).|Foregoes $58,579 reduction in 1σ volatility.",
              "metric": "Mức biến động USD giảm hoặc bỏ lỡ (1σ)|Dollar volatility reduction or forgone (1σ)"
            },
            {
              "title": "Chia 50/50; volatility khoảng 14,14%|Split 50/50; volatility about 14.14%",
              "delta": 58579,
              "reason": "Tương quan thấp giảm variance.|Low correlation reduces variance.",
              "assumption": "1m × (20%−14,1421%) ≈ 58.579 USD.|$1m × (20%−14.1421%) ≈ $58,579.",
              "metric": "Mức biến động USD giảm hoặc bỏ lỡ (1σ)|Dollar volatility reduction or forgone (1σ)"
            },
            {
              "title": "Chia 50/50 nhưng dự báo volatility bằng 0|Split 50/50 but forecast zero volatility",
              "delta": -141421,
              "reason": "Tương quan 0 không triệt tiêu mọi biến động.|Zero correlation does not eliminate risk.",
              "assumption": "Ghi thấp biến động 1σ khoảng 141.421 USD.|Understates 1σ volatility by about $141,421.",
              "metric": "Mức biến động USD giảm hoặc bỏ lỡ (1σ)|Dollar volatility reduction or forgone (1σ)"
            }
          ]
        }
      }
    ],
    "rebalancing": [
      {
        "item": {
          "title": "Tái cân bằng danh mục|Rebalance portfolio",
          "context": "Danh mục 1 triệu USD hiện 70% cổ phiếu, 30% trái phiếu. IPS mục tiêu 60/40, ngưỡng ±5 điểm %. Không thuế hoặc phí.|A $1m portfolio is 70% equities, 30% bonds. IPS target 60/40, bands ±5 percentage points. No tax or costs.",
          "task": "Giao dịch nào đưa danh mục về mục tiêu?|Which trade restores target weights?",
          "guidance": "Bán 100.000 USD cổ phiếu, mua 100.000 USD trái phiếu; mục tiêu được lập trước khi thị trường biến động.|Sell $100,000 equities and buy $100,000 bonds; follow the pre-established target."
        },
        "decision": {
          "correct": 0,
          "options": [
            {
              "title": "Chuyển 100.000 từ cổ phiếu sang trái phiếu|Move $100,000 from equities to bonds",
              "delta": 100000,
              "reason": "Đưa tỷ trọng về 60/40.|Restores 60/40 target.",
              "assumption": "100.000 USD lệch cổ phiếu được điều chỉnh, không phải lợi nhuận.|$100,000 equity overweight corrected, not profit.",
              "metric": "Mức lệch phân bổ được sửa hoặc tăng|Allocation deviation corrected or added"
            },
            {
              "title": "Mua thêm 100.000 cổ phiếu bằng trái phiếu|Buy $100,000 more equities using bonds",
              "delta": -100000,
              "reason": "Tăng sai lệch lên 80/20.|Increases drift to 80/20.",
              "assumption": "Tăng lệch cổ phiếu 100.000 USD.|Adds $100,000 equity overweight.",
              "metric": "Mức lệch phân bổ được sửa hoặc tăng|Allocation deviation corrected or added"
            },
            {
              "title": "Không giao dịch vì cổ phiếu đang thắng|Do nothing because stocks are winning",
              "delta": -100000,
              "reason": "Vượt ngưỡng IPS.|Breaches IPS band.",
              "assumption": "100.000 USD lệch mục tiêu chưa sửa.|$100,000 target deviation remains.",
              "metric": "Mức lệch phân bổ được sửa hoặc tăng|Allocation deviation corrected or added"
            }
          ]
        }
      }
    ]
  },
  "asset-allocation": {
    "ldi": [
      {
        "item": {
          "title": "Khớp nghĩa vụ hưu trí|Match pension liabilities",
          "context": "Quỹ có tài sản 10 triệu USD, duration 4; nghĩa vụ PV 10 triệu, duration 10. Stress lợi suất giảm 0,5 điểm %. Giả định dịch chuyển song song, bỏ qua convexity.|Pension assets $10m duration 4; liabilities PV $10m duration 10. Stress yields fall 0.5 percentage points. Parallel shift; ignore convexity.",
          "task": "Nếu muốn giảm duration mismatch, chọn cách nào?|How should duration mismatch be reduced?",
          "guidance": "Tài sản tăng khoảng 200.000, nghĩa vụ tăng 500.000; thiếu hụt tăng 300.000. Duration 10 khớp độ nhạy bậc nhất.|Assets rise about $200,000, liabilities $500,000; deficit grows $300,000. Duration 10 matches first-order sensitivity."
        },
        "decision": {
          "correct": 1,
          "options": [
            {
              "title": "Giảm duration tài sản còn 2|Reduce asset duration to 2",
              "delta": -100000,
              "reason": "Tăng mismatch.|Worsens mismatch.",
              "assumption": "Thiếu hụt stress 400.000, thêm 100.000 so với cũ.|Stress deficit $400,000, $100,000 worse.",
              "metric": "Thay đổi thiếu hụt tránh được hoặc tăng thêm|Deficit increase avoided or added"
            },
            {
              "title": "Điều chỉnh duration tài sản lên gần 10|Adjust asset duration toward 10",
              "delta": 300000,
              "reason": "Khớp độ nhạy nghĩa vụ.|Matches liability sensitivity.",
              "assumption": "Tránh thiếu hụt 300.000 USD theo stress bậc nhất.|Avoids $300,000 first-order stress deficit.",
              "metric": "Thay đổi thiếu hụt tránh được hoặc tăng thêm|Deficit increase avoided or added"
            },
            {
              "title": "Giữ duration 4|Keep duration 4",
              "delta": -300000,
              "reason": "Không giảm mismatch.|Leaves mismatch unhedged.",
              "assumption": "Thiếu hụt stress tăng 300.000 USD.|Stress deficit grows $300,000.",
              "metric": "Thay đổi thiếu hụt tránh được hoặc tăng thêm|Deficit increase avoided or added"
            }
          ]
        }
      }
    ],
    "liquidity-stress": [
      {
        "item": {
          "title": "Stress thanh khoản danh mục|Portfolio liquidity stress",
          "context": "Quỹ có 800.000 USD tiền thanh khoản, nghĩa vụ chắc chắn 600.000 và yêu cầu ký quỹ stress 300.000. Có thể bán tài sản thanh khoản khác trước stress, không phí.|Fund has $800,000 liquid cash, $600,000 known obligations and $300,000 stress margin calls. Can sell other liquid assets before stress at no cost.",
          "task": "Cần bổ sung tiền mặt tối thiểu bao nhiêu?|What minimum cash top-up is needed?",
          "guidance": "Tổng nhu cầu stress 900.000; thiếu 100.000. Nên cân nhắc thêm đệm ngoài mức tối thiểu.|Stress needs total $900,000; shortfall $100,000. Consider a further buffer."
        },
        "decision": {
          "correct": 2,
          "options": [
            {
              "title": "Không làm gì|Do nothing",
              "delta": -100000,
              "reason": "Không đủ tiền trong stress.|Insufficient stress liquidity.",
              "assumption": "Thiếu 100.000 USD.|$100,000 shortfall.",
              "metric": "Thiếu hụt stress được xử lý hoặc còn lại|Stress shortfall resolved or remaining"
            },
            {
              "title": "Bổ sung 50.000 USD|Top up $50,000",
              "delta": -50000,
              "reason": "Chưa đủ toàn bộ nghĩa vụ.|Still insufficient for obligations.",
              "assumption": "Còn thiếu 50.000 USD.|$50,000 remains unfunded.",
              "metric": "Thiếu hụt stress được xử lý hoặc còn lại|Stress shortfall resolved or remaining"
            },
            {
              "title": "Bổ sung ít nhất 100.000 USD|Top up at least $100,000",
              "delta": 100000,
              "reason": "Đủ mức tối thiểu theo stress.|Meets minimum stress requirement.",
              "assumption": "Khép thiếu hụt 100.000 USD; không phải lãi.|Closes $100,000 shortfall; not profit.",
              "metric": "Thiếu hụt stress được xử lý hoặc còn lại|Stress shortfall resolved or remaining"
            }
          ]
        }
      }
    ]
  },
  "performance": {
    "attribution": [
      {
        "item": {
          "title": "Hiệu quả phân bổ ngành|Sector allocation attribution",
          "context": "Danh mục 2 triệu USD; tỷ trọng ngành A 60% so benchmark 50%. A return 12%, benchmark tổng 8%. Dùng Brinson–Fachler allocation effect cho riêng ngành A.|Portfolio $2m; sector A weight 60% versus benchmark 50%. Sector A return 12%, total benchmark return 8%. Use Brinson–Fachler allocation for sector A only.",
          "task": "Allocation effect của A là bao nhiêu?|What is A's allocation effect?",
          "guidance": "(60%−50%)×(12%−8%) = 0,4% hay 8.000 USD trên vốn đầu kỳ; không phải tổng attribution.|(60%−50%)×(12%−8%) = 0.4% or $8,000 on beginning capital; not total attribution."
        },
        "decision": {
          "correct": 0,
          "options": [
            {
              "title": "0,4% hay 8.000 USD|0.4% or $8,000",
              "delta": 8000,
              "reason": "Dùng đúng benchmark tổng.|Uses the total benchmark correctly.",
              "assumption": "2m × 0,4% = 8.000 USD attribution.|$2m × 0.4% = $8,000 attribution.",
              "metric": "Hiệu ứng phân bổ xác định hoặc sai lệch|Allocation effect identified or estimation error"
            },
            {
              "title": "1,2% hay 24.000 USD|1.2% or $24,000",
              "delta": -16000,
              "reason": "Bỏ qua return benchmark tổng.|Ignores total benchmark return.",
              "assumption": "Ghi cao 16.000 USD.|Overstates by $16,000.",
              "metric": "Hiệu ứng phân bổ xác định hoặc sai lệch|Allocation effect identified or estimation error"
            },
            {
              "title": "0% vì không có selection|0% because there is no selection",
              "delta": -8000,
              "reason": "Allocation có thể dương dù selection bằng 0.|Allocation can be positive without selection.",
              "assumption": "Bỏ sót 8.000 USD attribution.|Omits $8,000 attribution.",
              "metric": "Hiệu ứng phân bổ xác định hoặc sai lệch|Allocation effect identified or estimation error"
            }
          ]
        }
      }
    ],
    "manager-selection": [
      {
        "item": {
          "title": "Đánh giá nhà quản lý sau phí|Manager assessment net of fees",
          "context": "Quỹ 5 triệu USD. Manager A gross return 9%, phí 1,5% tài sản đầu kỳ; B gross 8%, phí 0,3%. Cùng rủi ro và mandate, bỏ qua compounding trong năm.|Fund $5m. Manager A gross 9%, fee 1.5% of beginning assets; B gross 8%, fee 0.3%. Equal risk and mandate; ignore within-year compounding.",
          "task": "Theo net return kỳ này, ai tốt hơn?|Who has higher net return for this period?",
          "guidance": "A net 7,5%; B net 7,7%. Chênh lệch 0,2 điểm %; một năm không đủ kết luận skill bền vững.|A net 7.5%; B net 7.7%. Difference 0.2 percentage points; one year does not establish persistent skill."
        },
        "decision": {
          "correct": 1,
          "options": [
            {
              "title": "Chọn A vì gross cao|Choose A for higher gross return",
              "delta": -10000,
              "reason": "Bỏ qua phí.|Ignores fees.",
              "assumption": "5m × 0,2% = 10.000 USD thấp hơn B.|$5m × 0.2% = $10,000 below B.",
              "metric": "Chênh lệch lợi nhuận sau phí kỳ này|Period net return difference"
            },
            {
              "title": "B có net return cao hơn; tiếp tục due diligence|B has higher net return; continue due diligence",
              "delta": 10000,
              "reason": "So sau phí trên cùng mandate.|Compares net returns on equal mandate.",
              "assumption": "B cao hơn A 10.000 USD trong kỳ này.|B exceeds A by $10,000 this period.",
              "metric": "Chênh lệch lợi nhuận sau phí kỳ này|Period net return difference"
            },
            {
              "title": "Cho rằng A và B bằng nhau sau phí|Assume equal net returns",
              "delta": -10000,
              "reason": "Phí khác nhau tạo net return khác nhau.|Different fees produce different net returns.",
              "assumption": "Bỏ qua chênh lệch 10.000 USD.|Misses the $10,000 difference.",
              "metric": "Chênh lệch lợi nhuận sau phí kỳ này|Period net return difference"
            }
          ]
        }
      }
    ]
  },
  "pathways": {
    "private-markets-path": [
      {
        "item": {
          "title": "Thẩm định private equity|Private equity underwriting",
          "context": "Mua doanh nghiệp EV 10 triệu USD bằng 6 triệu nợ và 4 triệu equity. Stress EV cuối kỳ 8 triệu, dư nợ 6 triệu, không cổ tức hoặc phí.|Acquire a firm at $10m EV with $6m debt and $4m equity. Stress exit EV $8m, debt still $6m, no distributions or fees.",
          "task": "Kết quả vốn cổ phần trong stress là gì?|What is the equity outcome under stress?",
          "guidance": "Equity exit = 8m−6m=2m, loss 2m, MOIC 0,5×; leverage khuếch đại lỗ.|Exit equity = $8m−$6m=$2m, loss $2m, MOIC 0.5×; leverage amplifies loss."
        },
        "decision": {
          "correct": 2,
          "options": [
            {
              "title": "Lỗ 20% equity giống EV|20% equity loss, same as EV",
              "delta": -1200000,
              "reason": "Bỏ qua đòn bẩy.|Ignores leverage.",
              "assumption": "Lỗ dự báo 800.000, thấp hơn thực tế stress 1,2m.|Forecast loss $800,000, understates stress loss by $1.2m.",
              "metric": "Sai lệch stress equity tránh được hoặc phát sinh|Equity stress error avoided or incurred"
            },
            {
              "title": "Equity bằng 8 triệu EV|Equity equals $8m EV",
              "delta": -6000000,
              "reason": "Không trừ nợ.|Fails to subtract debt.",
              "assumption": "Ghi cao exit equity 6 triệu USD.|Overstates exit equity by $6m.",
              "metric": "Sai lệch stress equity tránh được hoặc phát sinh|Equity stress error avoided or incurred"
            },
            {
              "title": "Equity 2 triệu, lỗ 50%; kiểm tra covenant|Equity $2m, loss 50%; review covenants",
              "delta": 1200000,
              "reason": "Phân tích đúng capital structure.|Correctly models capital structure.",
              "assumption": "Tránh ghi thấp lỗ 1,2m so với áp mức giảm EV cho equity.|Avoids $1.2m loss understatement versus applying EV decline to equity.",
              "metric": "Sai lệch stress equity tránh được hoặc phát sinh|Equity stress error avoided or incurred"
            }
          ]
        }
      }
    ],
    "private-wealth-path": [
      {
        "item": {
          "title": "Chi phí thuế khi tái cân bằng|Tax-aware rebalancing",
          "context": "Khách có hai lô cùng cổ phiếu, mỗi lô giá thị trường 100.000 USD. Cost basis lô A 40.000, B 90.000. Cần bán 100.000; giả định thuế lãi vốn 20%, được chọn lô, không phí.|Client has two lots of the same stock, each worth $100,000. Cost basis A $40,000, B $90,000. Must sell $100,000; assumed 20% capital gains tax, specific-lot choice allowed, no fees.",
          "task": "Bán lô nào để giảm thuế ngay, các yếu tố khác như nhau?|Which lot minimizes immediate tax, all else equal?",
          "guidance": "A thuế 12.000; B thuế 2.000. B tiết kiệm 10.000 USD thuế hiện tại; xem xét kế hoạch thuế dài hạn.|A tax $12,000; B tax $2,000. B saves $10,000 immediate tax; consider long-term tax planning."
        },
        "decision": {
          "correct": 1,
          "options": [
            {
              "title": "Bán lô A|Sell lot A",
              "delta": -10000,
              "reason": "Lãi chịu thuế lớn hơn.|Larger taxable gain.",
              "assumption": "Thuế 12.000 thay vì 2.000 USD.|$12,000 tax instead of $2,000.",
              "metric": "Thuế hiện tại tiết kiệm hoặc tăng thêm|Immediate tax savings or extra cost"
            },
            {
              "title": "Bán lô B|Sell lot B",
              "delta": 10000,
              "reason": "Cost basis cao giảm lãi chịu thuế.|Higher basis reduces taxable gain.",
              "assumption": "12.000 − 2.000 = 10.000 USD tiết kiệm hiện tại.|$12,000 − $2,000 = $10,000 immediate savings.",
              "metric": "Thuế hiện tại tiết kiệm hoặc tăng thêm|Immediate tax savings or extra cost"
            },
            {
              "title": "Bán một nửa mỗi lô|Sell half of each lot",
              "delta": -5000,
              "reason": "Thuế trung bình cao hơn bán B.|Average tax exceeds selling B.",
              "assumption": "Thuế 7.000, cao hơn B 5.000 USD.|$7,000 tax, $5,000 above B.",
              "metric": "Thuế hiện tại tiết kiệm hoặc tăng thêm|Immediate tax savings or extra cost"
            }
          ]
        }
      }
    ]
  }
};
