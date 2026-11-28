/* Reviewed formula-specific illustrative cases. */
window.CFA_FORMULA_APPLICATIONS={
  "business-foundations/business-model": {
    "scenario": "Nhà bán lẻ có tài sản $500k và nợ phải trả $320k; chủ sở hữu muốn biết vốn kế toán còn lại.|A retailer has $500k assets and $320k liabilities; owners want their residual book interest.",
    "work": "E = $500k − $320k = $180k",
    "decision": "Dùng làm đệm vốn kế toán khi đánh giá khả năng chịu lỗ; kiểm tra chất lượng tài sản, không coi đây là giá thị trường.|Use as an accounting loss cushion; assess asset quality rather than treating book equity as market value."
  },
  "business-foundations/unit-economics": {
    "scenario": "CFO SaaS muốn tăng ngân sách marketing: ARPU $50/tháng, GM 80%, churn 4%/tháng, CAC $600.|A SaaS CFO considers increasing marketing: monthly ARPU $50, GM 80%, monthly churn 4%, CAC $600.",
    "work": "LTV = $50 × 0.8 / 0.04 = $1,000; LTV/CAC = 1.67×; payback = $600/$40 = 15 months",
    "decision": "Kiểm tra runway, chi phí phục vụ và retention theo cohort trước khi tăng chi; giả định churn ổn định và không chiết khấu.|Check runway, service cost and cohort retention before scaling; assumes stable churn and no discounting."
  },
  "business-foundations/operating-leverage": {
    "scenario": "Nhà máy có định phí năm $1.2m, giá bán $100, biến phí $40; dự kiến bán 24.000 sản phẩm.|A factory has annual fixed costs $1.2m, unit price $100, variable cost $40; forecasts 24,000 units.",
    "work": "Q* = 1,200,000/(100−40) = 20,000; EBIT = 24,000×60−1,200,000 = $240,000",
    "decision": "Đệm 4.000 sản phẩm. Stress nhu cầu giảm 20% khiến nhà máy dưới hòa vốn; kiểm tra công suất trước khi mở rộng.|A 4,000-unit cushion. A 20% demand decline puts output below break-even; verify capacity before expanding."
  },
  "business-foundations/business-memo": {
    "scenario": "Quỹ mua doanh nghiệp có EV hoạt động $8m, nợ $3m, tiền dư ngoài EV $0.5m.|A fund buys a firm with operating EV $8m, debt $3m, surplus cash outside EV $0.5m.",
    "work": "Equity value = 8−3+0.5 = $5.5m",
    "decision": "Dùng $5.5m làm giá trị chỉ báo equity; kiểm tra debt-like items, tiền hạn chế và các claim khác trước đàm phán.|Use $5.5m as indicative equity value; check debt-like items, restricted cash and other claims before negotiating."
  },
  "corporate-law/shareholder-rights": {
    "scenario": "Nhà đầu tư có 100.000/1 triệu cổ phần; công ty phát hành thêm 250.000 cổ phần, nhà đầu tư không mua.|An investor owns 100,000 of 1m shares; the firm issues 250,000 more and the investor does not subscribe.",
    "work": "100,000/1,000,000 = 10% → 100,000/1,250,000 = 8%",
    "decision": "Kiểm tra quyền biểu quyết, quyền ưu tiên và giá phát hành; giảm tỷ lệ sở hữu không tự động làm giá trị cổ phần giảm tương ứng.|Review voting rights, pre-emption and issue price; percentage dilution need not imply equivalent value loss."
  },
  "accounting-foundations/accounting-equation": {
    "scenario": "Startup nhận $100k vốn góp, vay $50k, mua máy $120k bằng tiền.|A startup receives $100k equity, borrows $50k and buys equipment for $120k cash.",
    "work": "A = $30k + $120k = $150k = L + E = $50k + $100k",
    "decision": "Đối chiếu sổ cái, nhưng nhớ chỉ còn $30k tiền vận hành dù tổng tài sản $150k.|Reconcile the ledger; only $30k remains available for operations despite $150k total assets."
  },
  "accounting-foundations/cost-allocation": {
    "scenario": "Nhà máy mua máy $100k, giá trị còn lại $10k, tuổi thọ 5 năm, sử dụng đủ năm.|A factory buys a $100k machine, $10k residual, five-year life, available for a full year.",
    "work": "Depreciation = (100,000−10,000)/5 = $18,000; NBV = $82,000",
    "decision": "Lập dự báo chi phí $18k/năm và ngân sách capex $100k riêng; kiểm tra tuổi thọ và impairment.|Forecast $18k annual expense separately from $100k capex; assess useful life and impairment."
  },
  "quantitative/tvm": {
    "scenario": "Kho bạc chọn nhận $92k ngay hoặc $50k cuối mỗi năm trong hai năm; r=8%, rủi ro như nhau.|Treasury can receive $92k now or $50k at each of two year-ends; r=8%, equal risk.",
    "work": "PV = 50,000/1.08 + 50,000/1.08² ≈ $89,163",
    "decision": "Chọn tiền ngay nếu tối đa hóa PV và điều khoản tương đương; kiểm tra thuế, rủi ro thanh toán.|Choose immediate cash to maximize PV under comparable terms; check taxes and payment risk."
  },
  "quantitative/probability": {
    "scenario": "Quỹ dự báo ba kịch bản: suy thoái 20% (−25%), cơ sở 50% (+8%), bùng nổ 30% (+30%).|A fund models recession 20% (−25%), base 50% (+8%), boom 30% (+30%).",
    "work": "E(R)=0.2×(−25%)+0.5×8%+0.3×30%=8%",
    "decision": "So với required return; giới hạn vị thế theo downside và độ nhạy xác suất, không hứa lợi suất 8%.|Compare with required return; size positions for downside and probability sensitivity, not a promised 8%."
  },
  "quantitative/sampling": {
    "scenario": "Nhóm nghiên cứu có 100 quan sát độc lập, SD 20%, mean 8%.|Researchers have 100 independent observations, SD 20%, mean 8%.",
    "work": "SE=20%/√100=2 pp; approximate 95% CI = 8% ± 3.92 pp",
    "decision": "Khoảng 4,08–11,92% chỉ có ý nghĩa dưới giả định phù hợp; kiểm tra phụ thuộc chuỗi và bias.|The 4.08–11.92% interval requires suitable assumptions; check dependence and bias."
  },
  "quantitative/regression": {
    "scenario": "Analyst ước lượng excess return tháng: intercept 0,2%, beta 1,2; thị trường excess return 3%.|An analyst estimates monthly excess return: intercept 0.2%, beta 1.2; market excess return scenario 3%.",
    "work": "ŷ = 0.2% + 1.2×3% = 3.8%",
    "decision": "Dùng để stress danh mục theo thị trường; kiểm tra residual và ổn định ngoài mẫu, không coi là dự báo chắc chắn.|Use for market stress testing; assess residuals and out-of-sample stability rather than treating it as certain."
  },
  "economics/supply-demand": {
    "scenario": "Cửa hàng thử tăng giá 10%, lượng bán giảm 20%, các yếu tố khác ổn định.|A store tests a 10% price increase; volume falls 20%, other factors stable.",
    "work": "ε ≈ −20%/10% = −2; revenue factor = 1.10×0.80 = 0.88",
    "decision": "Cầu co giãn; cân nhắc đổi giá nhưng đánh giá lợi nhuận sau biến phí thay vì chỉ doanh thu giảm 12%.|Elastic demand; reconsider pricing but assess contribution profit, not just the 12% revenue decline."
  },
  "economics/policy": {
    "scenario": "Quỹ tiền mặt nhận lãi 5%/năm, dự báo lạm phát 6%.|A cash fund earns 5% annually against expected inflation of 6%.",
    "work": "Real rate = 1.05/1.06−1 ≈ −0.94%",
    "decision": "Sức mua kỳ vọng giảm; cân nhắc tài sản phù hợp kỳ hạn và rủi ro, không hy sinh thanh khoản cần thiết.|Expected purchasing power falls; consider horizon-appropriate assets without sacrificing needed liquidity."
  },
  "economics/fx": {
    "scenario": "Nhập khẩu phải trả USD 1m sau năm; spot 7,20 nội tệ/USD, lãi nội tệ 5%, USD 3%.|An importer owes USD 1m in a year; spot 7.20 domestic/USD, domestic rate 5%, USD rate 3%.",
    "work": "F = 7.20×1.05/1.03 ≈ 7.3398; 1m×F ≈ 7.34m",
    "decision": "Dùng giá lý thuyết để đối chiếu báo giá hedge thực tế; forward không dự báo chắc spot.|Compare theoretical price with executable hedge quotes; forward is not a certain spot forecast."
  },
  "fsa/framework": {
    "scenario": "Hai nhà bán lẻ: A margin 12%, turnover 1, leverage 1,5; B margin 4%, turnover 1,5, leverage 3.|Two retailers: A margin 12%, turnover 1, leverage 1.5; B margin 4%, turnover 1.5, leverage 3.",
    "work": "ROE A = 12%×1×1.5 = 18%; B = 4%×1.5×3 = 18%",
    "decision": "B phụ thuộc đòn bẩy nhiều hơn; điều tra khả năng trả lãi và chất lượng lợi nhuận trước khi chọn.|B relies more on leverage; investigate interest coverage and earnings quality before selecting."
  },
  "fsa/cash-quality": {
    "scenario": "Công ty NI $50k, khấu hao $12k, phải thu tăng $35k, tồn kho tăng $10k, phải trả tăng $8k.|Firm NI $50k, depreciation $12k, receivables up $35k, inventory up $10k, payables up $8k.",
    "work": "CFO = 50+12−35−10+8 = $25k; CFO/NI = 50%",
    "decision": "Kiểm tra tuổi nợ và ghi nhận doanh thu; chuyển đổi tiền yếu không tự chứng minh gian lận.|Investigate aging and revenue recognition; weak cash conversion alone does not prove fraud."
  },
  "corporate-finance/working-capital": {
    "scenario": "Nhà phân phối DIO 40, DSO 30, DPO 25 ngày; dự kiến giảm DSO 10 ngày, bán chịu $10k/ngày.|Distributor DIO 40, DSO 30, DPO 25 days; plans to cut DSO by 10 days at $10k daily credit sales.",
    "work": "CCC = 40+30−25 = 45 days → 35 days; 10×$10k = $100k",
    "decision": "So tiền giải phóng với chi phí thu nợ và churn; đây là vốn lưu động, không phải doanh thu tăng.|Compare cash release with collection costs and churn; this is working capital, not extra revenue."
  },
  "corporate-finance/npv": {
    "scenario": "Nhà máy đầu tư $100k, dòng tiền gia tăng sau thuế $60k cuối mỗi năm trong hai năm, r=10%.|Factory project costs $100k, incremental after-tax cash flows $60k at each of two year-ends, r=10%.",
    "work": "NPV = −100,000+60,000/1.1+60,000/1.1² ≈ $4,132",
    "decision": "Có thể duyệt nếu giả định vững và không có dự án loại trừ tốt hơn; stress sales, capex và giá trị thanh lý.|Consider approval if assumptions hold and no better mutually exclusive project exists; stress sales, capex and salvage."
  },
  "corporate-finance/wacc": {
    "scenario": "CFO nhà máy tính suất chiết khấu dự án: 60% equity, 40% nợ theo giá thị trường; cost of equity 10%, nợ 5%, thuế 25%.|A manufacturing CFO sets a project discount rate: 60% equity, 40% debt by market value; equity cost 10%, debt 5%, tax 25%.",
    "work": "After-tax debt = 5%×(1−0.25)=3.75%; WACC=0.60×10%+0.40×3.75%=7.5%",
    "decision": "Dùng 7,5% cho dòng tiền dự án có rủi ro tương đương; tính NPV và stress rủi ro, cấu trúc vốn, lá chắn thuế trước phê duyệt.|Use 7.5% for comparable-risk project cash flows; calculate NPV and stress risk, capital structure and tax shields before approval."
  },
  "corporate-finance/restructuring": {
    "scenario": "Bên mua định giá target $10m, PV synergy $3m, PV tích hợp $1m, giá mua $11m; cùng cơ sở equity.|Acquirer estimates target value $10m, synergy PV $3m, integration PV $1m, price $11m; consistent equity basis.",
    "work": "Acquirer NPV = 10+3−1−11 = $1m; maximum price at zero NPV = $12m",
    "decision": "Đàm phán có đệm dưới $12m và stress synergy hụt, phí, nợ và thời gian tích hợp.|Negotiate with a cushion below $12m; stress missing synergies, fees, debt and integration timing."
  },
  "equity/markets-indexes": {
    "scenario": "Quỹ mô phỏng chỉ số A trọng số đầu kỳ 70% return 10%, B 30% return −5%, không đổi thành phần.|A tracker has beginning index weights A 70% return 10%, B 30% return −5%; constituents unchanged.",
    "work": "R = 0.7×10% + 0.3×(−5%) = 5.5%",
    "decision": "Dùng làm benchmark cùng cơ sở total/price return; đo tracking difference sau phí.|Use as benchmark on consistent total/price-return basis; measure tracking difference after fees."
  },
  "equity/forecast-roic": {
    "scenario": "Analyst xem công ty NOPAT $150k, invested capital bình quân $1m, WACC 10%.|Analyst reviews firm NOPAT $150k, average invested capital $1m, WACC 10%.",
    "work": "ROIC=150,000/1,000,000=15%; spread=5 pp; economic profit≈$50k",
    "decision": "Kiểm tra ROIC gia tăng cũng vượt WACC trước khi dự báo tăng trưởng tạo giá trị; chuẩn hóa vốn đầu tư.|Check incremental ROIC exceeds WACC before forecasting value-creating growth; normalize invested capital."
  },
  "equity/valuation": {
    "scenario": "Quỹ xem cổ phiếu tiện ích giá $60, cổ tức kỳ tới $3, tăng trưởng bền vững 4%, cost of equity 10%.|A fund reviews utility stock at $60, next dividend $3, sustainable growth 4%, cost of equity 10%.",
    "work": "V₀=3/(0.10−0.04)=$50; 20% safety margin implies $40",
    "decision": "Không mua chỉ dựa trên Gordon ở $60; kiểm tra cổ tức, độ nhạy r,g và điều kiện r>g.|Do not buy solely on Gordon at $60; test dividends, r/g sensitivity and r>g."
  },
  "fixed-income/structures-yields": {
    "scenario": "Quỹ xem bond 2 năm mệnh giá $1.000, coupon năm 5%, yield yêu cầu 6%, trả cuối năm.|Fund evaluates two-year $1,000 bond, annual coupon 5%, required yield 6%, year-end payments.",
    "work": "P=50/1.06+1050/1.06²≈$981.67",
    "decision": "So giá thị trường với giá chỉ báo trên cùng yield và credit risk; coupon không phải realized return.|Compare market price with indicated price at consistent yield and credit risk; coupon is not realized return."
  },
  "fixed-income/spot-curve": {
    "scenario": "Dealer định giá bond trả $50 năm 1, $1.050 năm 2; spot 1 năm 4%, 2 năm 5%.|Dealer values bond paying $50 in year 1, $1,050 in year 2; one-year spot 4%, two-year 5%.",
    "work": "P=50/1.04+1050/1.05²≈$1,000.46",
    "decision": "Dùng spot từng kỳ khi định giá; thêm spread phù hợp nếu đường cong cơ sở chưa phản ánh credit risk.|Use maturity-specific spots; add appropriate spreads if the base curve excludes credit risk."
  },
  "fixed-income/duration-convexity": {
    "scenario": "Danh mục $2m, modified duration 5, convexity 30; stress yield tăng 1 điểm %.|A $2m bond portfolio has modified duration 5, convexity 30; stress yield up one percentage point.",
    "work": "ΔP/P≈−5×0.01+0.5×30×0.01²=−4.85%; ΔP≈−$97k",
    "decision": "Nếu hạn mức lỗ $80k, cân nhắc giảm duration; kiểm tra curve, spread và optionality.|If loss limit is $80k, consider reducing duration; check curve, spread and optionality."
  },
  "fixed-income/credit": {
    "scenario": "Ngân hàng có khoản vay EAD $1m, PD năm 4%, recovery 40%.|A bank has loan EAD $1m, annual PD 4%, recovery 40%.",
    "work": "LGD=60%; EL=0.04×0.60×1,000,000=$24,000",
    "decision": "Đưa EL vào pricing và risk budget; dự phòng kế toán có quy tắc riêng, EL không đo unexpected loss.|Incorporate EL into pricing and risk budgets; accounting allowances have separate rules; EL excludes unexpected loss."
  },
  "fixed-income/portfolio-hedge": {
    "scenario": "Quỹ muốn trung hòa duration danh mục $10m, D=6; mỗi futures exposure $100k, duration hiệu dụng 5.|Fund wants duration neutrality on $10m portfolio, D=6; futures exposure $100k per contract, effective duration 5.",
    "work": "N=(6−0)×10,000,000/(5×100,000)=120 short contracts",
    "decision": "Bán 120 hợp đồng theo giả định; kiểm tra CTD, conversion factor, basis, ký quỹ và tái cân bằng.|Short 120 contracts under assumptions; check CTD, conversion factors, basis, margin and rebalancing."
  },
  "derivatives/payoff-arbitrage": {
    "scenario": "Trader mua call strike $100, premium $5, đáo hạn stock $120, multiplier 100.|Trader buys call strike $100, premium $5, expiry stock $120, multiplier 100.",
    "work": "Profit=(max(120−100,0)−5)×100=$1,500",
    "decision": "Kiểm tra break-even $105 và downside premium $500 tại đáo hạn, bỏ qua tài trợ/phí.|Check $105 expiry break-even and $500 premium downside, ignoring financing and fees."
  },
  "derivatives/forwards-futures": {
    "scenario": "Doanh nghiệp muốn khóa giá tài sản không tạo thu nhập: spot $100, risk-free 5% ghép năm, 1 năm.|Firm wants to lock non-income-paying asset: spot $100, annual risk-free 5%, one year.",
    "work": "F₀,T=100×1.05=$105",
    "decision": "So báo giá thực tế với cost of carry; xét thu nhập tài sản, phí lưu kho và chi phí vốn trước khi kết luận arbitrage.|Compare executable quotes with cost of carry; account for income, storage and funding before claiming arbitrage."
  },
  "derivatives/options-greeks": {
    "scenario": "Dealer kiểm tra European options cùng strike/expiry, stock không cổ tức $100, PV strike $95, put $4.|Dealer checks European options with same strike/expiry, non-dividend stock $100, PV strike $95, put $4.",
    "work": "C=P+S−PV(K)=4+100−95=$9",
    "decision": "Dùng parity kiểm tra báo giá và tái tạo; xem bid–ask, dividends và exercise style.|Use parity to check quotes and replication; consider bid–ask, dividends and exercise style."
  },
  "derivatives/swaps": {
    "scenario": "CFO giữ swap có PV dòng nhận $520k, PV dòng trả $500k cùng ngày định giá.|CFO holds swap with receive-leg PV $520k and pay-leg PV $500k at same valuation date.",
    "work": "V_swap=520−500=$20k",
    "decision": "Ước tính giá trị đóng vị thế; đối chiếu đường cong, collateral, credit adjustment và giá thực thi.|Estimate unwind value; reconcile curves, collateral, credit adjustments and executable quotes."
  },
  "derivatives/hedge-design": {
    "scenario": "Nhà nhập khẩu dùng futures có correlation 0,8 với spot, volatility spot 20%, futures 25%.|Importer uses futures with correlation 0.8 to spot, spot volatility 20%, futures volatility 25%.",
    "work": "h*=0.8×20/25=0.64; 100,000×0.64=64,000",
    "decision": "Hedge 64.000 đơn vị tương đương trước quy đổi hợp đồng, đúng chiều nghĩa vụ mua; cập nhật basis và margin.|Hedge 64,000 equivalent units before contract conversion, in the correct purchase direction; update basis and margin."
  },
  "alternatives/features-fees": {
    "scenario": "Quỹ NAV trước phí $10m, phí quản lý $150k, phí hiệu suất đã tính theo hợp đồng $200k.|Fund pre-fee NAV $10m, management fee $150k, contractual performance fee $200k.",
    "work": "Net NAV=10,000,000−150,000−200,000=$9.65m",
    "decision": "So hiệu quả net giữa quỹ; kiểm tra high-water mark, hurdle và phân bổ phí.|Compare net fund performance; check high-water marks, hurdles and fee allocation."
  },
  "alternatives/real-assets": {
    "scenario": "Nhà đầu tư xem tòa nhà cho thuê NOI ổn định năm tới $120k, cap rate 6%, giá chào $2.4m.|Investor reviews rental building stabilized next-year NOI $120k, cap rate 6%, ask $2.4m.",
    "work": "V=120,000/0.06=$2m; asking cap rate=5%",
    "decision": "Đàm phán hoặc chứng minh cap rate thấp hơn hợp lý; stress vacancy, sửa chữa, lãi vay.|Negotiate or justify lower cap rate; stress vacancy, repairs and financing."
  },
  "alternatives/private-capital": {
    "scenario": "LP góp $4m, nhận phân phối $2m, phần còn lại định giá $5m.|LP invested $4m, received $2m distributions, residual value $5m.",
    "work": "MOIC=(2+5)/4=1.75×",
    "decision": "Tách tiền đã nhận và NAV chưa hiện thực; so IRR, thời gian nắm giữ trước tái cam kết.|Separate realized distributions and unrealized NAV; compare IRR and holding period before recommitting."
  },
  "alternatives/hedge-commodities": {
    "scenario": "Hedge fund có long $130m, short $50m theo độ lớn, NAV $100m.|Hedge fund has $130m long, $50m short magnitude, NAV $100m.",
    "work": "Gross=(130+50)/100=180%; net=(130−50)/100=80%",
    "decision": "Gross cao cho biết quy mô vị thế; đánh giá thêm beta, derivatives, thanh khoản, margin calls.|High gross indicates position scale; also evaluate beta, derivatives, liquidity and margin calls."
  },
  "portfolio/risk-return": {
    "scenario": "Quỹ chia 50/50 hai tài sản volatility 20%, tương quan 0.|Fund splits 50/50 between two assets with 20% volatility, zero correlation.",
    "work": "σ²=0.5²×0.2²+0.5²×0.2²=0.02; σ=14.14%",
    "decision": "Đa dạng hóa giảm biến động dự kiến so với 20% từng tài sản; stress correlation tăng trong khủng hoảng.|Diversification reduces expected volatility versus each asset’s 20%; stress rising crisis correlations."
  },
  "portfolio/capm": {
    "scenario": "Quỹ định giá cổ phiếu beta 1,2; risk-free 3%, expected market return 8%.|Fund values stock beta 1.2; risk-free 3%, expected market return 8%.",
    "work": "E(R)=3%+1.2×(8%−3%)=9%",
    "decision": "Dùng 9% làm cost of equity tham khảo cho FCFE/DDM; kiểm tra beta, risk premium và giới hạn mô hình.|Use 9% as indicative cost of equity for FCFE/DDM; review beta, risk premium and model limits."
  },
  "asset-allocation/saa": {
    "scenario": "Quỹ hưu trí mục tiêu 60% equity kỳ vọng 8%, 40% bond kỳ vọng 3%.|Pension fund targets 60% equity expected 8%, 40% bonds expected 3%.",
    "work": "E(Rp)=0.6×8%+0.4×3%=6%",
    "decision": "So 6% với mục tiêu tài trợ nghĩa vụ; mô hình covariance, thanh khoản và stress trước khi đặt trọng số.|Compare 6% with liability funding goals; model covariance, liquidity and stress before setting weights."
  },
  "asset-allocation/taa": {
    "scenario": "Committee cân nhắc overweight equity, active return kỳ vọng 2%, tracking error 6%, chi phí 0,4%/năm.|Committee considers equity overweight, expected active return 2%, tracking error 6%, annual costs 0.4%.",
    "work": "IR=2/6=0.33; net IR=(2−0.4)/6≈0.27",
    "decision": "Phân bổ risk budget nếu edge đủ hấp dẫn; đặt catalyst, kỳ hạn đánh giá và điều kiện thoát.|Allocate risk budget if edge is compelling; set catalysts, review horizon and exit conditions."
  },
  "asset-allocation/ldi": {
    "scenario": "Quỹ hưu trí tài sản và PV nghĩa vụ cùng $10m, duration 4 và 10; yield giảm 0,5 điểm %.|Pension assets and liability PV both $10m, durations 4 and 10; yield falls 0.5 percentage points.",
    "work": "ΔA≈+$200k; ΔL≈+$500k; ΔS≈−$300k",
    "decision": "Cân nhắc tăng duration tài sản để giảm mismatch; kiểm tra collateral và key-rate exposure.|Consider extending asset duration to reduce mismatch; check collateral and key-rate exposure."
  },
  "performance/return-measures": {
    "scenario": "Manager quản lý $100k, tăng 10%, khách góp $100k, sau đó giảm 5%.|Manager runs $100k, gains 10%, receives $100k contribution, then loses 5%.",
    "work": "TWR=1.10×0.95−1=4.5%; ending value=$199,500",
    "decision": "Dùng TWR đánh giá manager không kiểm soát dòng tiền; bổ sung MWR để hiểu trải nghiệm khách.|Use TWR for managers without cash-flow control; supplement with MWR for client experience."
  },
  "performance/attribution": {
    "scenario": "Quỹ giữ ngành công nghệ 30% so benchmark 20%; benchmark ngành 8%, tổng benchmark 5%.|Fund holds tech 30% vs benchmark 20%; sector benchmark return 8%, total benchmark 5%.",
    "work": "A=(0.30−0.20)×(0.08−0.05)=0.003=+0.30 pp",
    "decision": "Overweight giúp allocation; tính selection và interaction theo cùng quy ước trước khi đánh giá active return.|Overweight helped allocation; calculate selection and interaction consistently before evaluating active return."
  },
  "performance/appraisal": {
    "scenario": "Hai manager có annualized arithmetic mean active return 2%; annual tracking error A 4%, B 8%, cùng benchmark/kỳ đo.|Two managers have annualized arithmetic mean active return 2%; annual tracking error A 4%, B 8%, same benchmark/horizon.",
    "work": "IR A=2/4=0.50; IR B=2/8=0.25",
    "decision": "A hiệu quả hơn trên mỗi đơn vị active risk trong kỳ đo; kiểm tra phí, drawdown và track record.|A was more efficient per unit of active risk over the measurement period; review fees, drawdowns and track record."
  },
  "pathways/private-markets-path": {
    "scenario": "PE fund dự báo exit EBITDA $25m, multiple 12×, net debt $80m, equity đầu tư $80m.|PE fund forecasts exit EBITDA $25m, multiple 12×, net debt $80m, initial equity $80m.",
    "work": "Exit EV=25×12=$300m; equity=300−80=$220m; MOIC=2.75×",
    "decision": "Stress multiple 10× cho equity $170m; đánh giá EBITDA, debt paydown và chi phí thoái vốn.|Stress a 10× multiple giving equity $170m; assess EBITDA, debt paydown and exit costs."
  },
  "cac": {
    "scenario": "Đội marketing SaaS chi $12k cho 100 khách trả tiền mới.|A SaaS marketing team spends $12k for 100 new paying customers.",
    "work": "CAC=12,000/100=$120",
    "decision": "So CAC theo kênh với LTV, payback và retention trước chuyển ngân sách.|Compare channel CAC with LTV, payback and retention before reallocating."
  },
  "cac-payback": {
    "scenario": "Startup chi $120/khách, contribution $20/tháng.|Startup spends $120/customer, monthly contribution $20.",
    "work": "Payback=120/20=6 months",
    "decision": "Nếu runway chỉ 4 tháng, tăng tốc thu hút khách có thể gây thiếu tiền; xem trả trước và retention.|With four months of runway, acquisition growth may strain cash; consider prepayments and retention."
  },
  "dol": {
    "scenario": "Nhà máy contribution $300k, EBIT $100k, sales dự kiến tăng 5% với giá và chi phí đơn vị không đổi.|Factory contribution $300k, EBIT $100k, expected sales increase 5% at constant price and unit costs.",
    "work": "DOL=300/100=3; ΔEBIT≈3×5%=15%; EBIT=$115k",
    "decision": "Stress sales giảm 5% và kiểm soát định phí; DOL phụ thuộc mức hoạt động.|Stress a 5% sales decline and manage fixed costs; DOL depends on activity level."
  },
  "margin": {
    "scenario": "Nhà bán lẻ sales $100k, COGS $60k; giá mua tăng khiến COGS lên $65k.|Retailer sales $100k, COGS $60k; supplier increases raise COGS to $65k.",
    "work": "GM=(100−60)/100=40% → 35%",
    "decision": "Thương lượng nhà cung cấp, mix hoặc giá bán; tính chi phí bán hàng trước khi quyết định.|Negotiate sourcing, mix or price; account for selling expenses before deciding."
  },
  "dilution": {
    "scenario": "Founder có 30/100 cổ phần; vòng vốn phát hành thêm 25, founder không mua.|Founder owns 30 of 100 shares; financing issues 25 more, founder does not subscribe.",
    "work": "Dilution=1−100/125=20%; ownership=30/125=24%",
    "decision": "Đánh giá giá trị sau gọi vốn và quyền kiểm soát, không từ chối chỉ vì tỷ lệ giảm.|Assess post-money value and control rights, not dilution alone."
  },
  "recovery": {
    "scenario": "Quỹ mua khoản nợ $100k kỳ vọng thu hồi $60k sau thanh lý, chưa chiết khấu.|Fund considers $100k distressed claim expected to recover $60k after liquidation, undiscounted.",
    "work": "RR=60/100=60%; loss severity=40%",
    "decision": "So giá mua với PV thu hồi sau chi phí và kiểm tra thứ tự ưu tiên.|Compare purchase price with recovery PV net of costs and verify claim priority."
  },
  "retained": {
    "scenario": "CFO lập kế hoạch cổ tức: RE đầu $100k, NI $30k, cổ tức $10k.|CFO plans dividends: beginning RE $100k, NI $30k, dividends $10k.",
    "work": "RE₁=100+30−10=$120k",
    "decision": "Đối chiếu equity; kiểm tra tiền, covenants và luật trước khi tăng cổ tức.|Reconcile equity; check cash, covenants and law before increasing dividends."
  },
  "cogs": {
    "scenario": "Cửa hàng tồn đầu $40k, mua $90k, tồn cuối $30k theo giá vốn.|Shop has $40k beginning inventory, $90k purchases, $30k ending inventory at cost.",
    "work": "COGS=40+90−30=$100k",
    "decision": "Dùng tính gross margin; đối chiếu kiểm kê và hàng hỏng/mất.|Use for gross margin; reconcile physical counts and shrinkage."
  },
  "fv": {
    "scenario": "Kho bạc gửi $100k hai năm lãi 10% ghép năm, không rút.|Treasury deposits $100k for two years at 10% annual compounding, no withdrawals.",
    "work": "FV=100,000×1.10²=$121,000",
    "decision": "So đáo hạn với nghĩa vụ tương lai; tính thuế và rủi ro đối tác.|Compare maturity proceeds with obligations; account for tax and counterparty risk."
  },
  "pv": {
    "scenario": "Công ty cần $121k sau hai năm, tài sản phù hợp trả 10%/năm.|Firm needs $121k in two years, suitable asset yields 10% annually.",
    "work": "PV=121,000/1.10²=$100,000",
    "decision": "Dự trữ $100k nếu yield chắc chắn; nếu không, stress yield và lập buffer.|Reserve $100k if yield is certain; otherwise stress yields and add a buffer."
  },
  "ear": {
    "scenario": "CFO so khoản vay APR 12% ghép tháng với lãi hiệu dụng 12,5%, bỏ phí.|CFO compares 12% APR compounded monthly with 12.5% effective annual loan, ignoring fees.",
    "work": "EAR=(1+0.12/12)^12−1≈12.68%",
    "decision": "Khoản 12,5% rẻ hơn trên cơ sở lãi hiệu dụng; kiểm tra lịch trả và phí.|The 12.5% loan is cheaper on effective-rate basis; check payments and fees."
  },
  "annuity": {
    "scenario": "Công ty mua quyền nhận $100k cuối mỗi năm trong 2 năm, r=10%.|Firm prices a right to $100k at each of two year-ends, r=10%.",
    "work": "PV=100,000×(1−1.1^−2)/0.1≈$173,554",
    "decision": "So giá chào với PV; chỉnh nếu dòng tiền đầu kỳ hoặc rủi ro khác.|Compare asking price with PV; adjust for beginning payments or different risk."
  },
  "variance": {
    "scenario": "Analyst lập hai kịch bản đồng xác suất: return 0% hoặc 20%.|Analyst models equally likely returns of 0% or 20%.",
    "work": "Mean=10%; variance=0.5×(−0.1)²+0.5×0.1²=0.01; σ=10%",
    "decision": "So dispersion với tài sản khác; đo thêm tail risk vì variance đối xử hai phía như nhau.|Compare dispersion across assets; measure tail risk because variance treats upside and downside alike."
  },
  "bayes": {
    "scenario": "Risk team có prior default 10%, cảnh báo xuất hiện ở 80% khoản default, và 20% toàn bộ khoản vay.|Risk team has default prior 10%, alert appears in 80% of eventual defaults and 20% of all loans.",
    "work": "Posterior=0.8×0.1/0.2=40%",
    "decision": "Ưu tiên rà soát khoản bị cảnh báo; không coi default chắc chắn; hiệu chỉnh theo dữ liệu mới.|Prioritize flagged loans; do not assume certain default; recalibrate with new data."
  },
  "compound": {
    "scenario": "Nhà đầu tư nắm quỹ tăng 10% kỳ đầu, giảm 5% kỳ hai, không dòng tiền.|Investor holds fund up 10% first period, down 5% second, no flows.",
    "work": "R=1.10×0.95−1=4.5%",
    "decision": "Đối chiếu tài sản cuối kỳ; annualize nếu so kỳ hạn khác nhau.|Reconcile ending wealth; annualize when comparing different horizons."
  },
  "ttest": {
    "scenario": "Analyst lấy 16 quan sát độc lập gần chuẩn: mean 12, SD 4; kiểm định mean=10.|Analyst samples 16 independent approximately normal observations: mean 12, SD 4; tests mean=10.",
    "work": "SE=4/√16=1; t=(12−10)/1=2; df=15; 5% two-sided critical≈2.131",
    "decision": "Chưa bác bỏ H0 ở 5%; không chứng minh H0 đúng. Kiểm tra giả định và thu thập thêm dữ liệu.|Do not reject H0 at 5%; this does not prove H0. Check assumptions and gather data."
  },
  "confidence": {
    "scenario": "Nghiên cứu dự báo mean 10%, SE 1 điểm %, t-critical 2.|Research estimates mean 10%, SE 1 percentage point, t-critical 2.",
    "work": "CI=10%±2×1 pp=[8%,12%]",
    "decision": "Dùng phạm vi để stress expected return; không gán xác suất cho tham số cố định sau quan sát.|Use range to stress expected return; do not assign probability to a fixed parameter after observing the data."
  },
  "inflation": {
    "scenario": "Doanh nghiệp điều chỉnh hợp đồng theo CPI từ 120 lên 126.|Firm adjusts contracts based on CPI rising from 120 to 126.",
    "work": "π=(126−120)/120=5%",
    "decision": "Tính mức điều chỉnh nếu hợp đồng cho phép; kiểm tra CPI có đại diện chi phí đầu vào không.|Calculate adjustment if contract permits; check whether CPI represents input costs."
  },
  "gdp": {
    "scenario": "Analyst lập mô hình kinh tế giả định C=60, I=20, G=15, X=10, M=5 (tỷ USD).|Analyst models economy with C=60, I=20, G=15, X=10, M=5 ($bn).",
    "work": "GDP=60+20+15+10−5=$100bn",
    "decision": "Phân tích động lực tăng trưởng từ tiêu dùng/đầu tư; dùng GDP thực để so tăng trưởng sản lượng qua thời gian.|Analyze consumption/investment drivers; use real GDP for output growth over time."
  },
  "roa": {
    "scenario": "Hai nhà máy cùng NI $12m; A average assets $200m, B $150m.|Two manufacturers have NI $12m; A average assets $200m, B $150m.",
    "work": "ROA A=12/200=6%; B=12/150=8%",
    "decision": "B sử dụng tài sản hiệu quả hơn theo tỷ số này; kiểm tra tuổi tài sản, leasing và chính sách kế toán.|B is more asset-efficient on this ratio; assess asset age, leasing and accounting."
  },
  "roe": {
    "scenario": "Ngân hàng NI $20m, average common equity $100m, toàn bộ NI thuộc cổ đông thường.|Bank earns $20m attributable to common equity, average common equity $100m.",
    "work": "ROE=20/100=20%",
    "decision": "So với cost of equity và peer; phân tích đòn bẩy, vốn pháp định và rủi ro tín dụng.|Compare with cost of equity and peers; analyze leverage, regulatory capital and credit risk."
  },
  "current-ratio": {
    "scenario": "Nhà cung cấp xem khách hàng có current assets $150k, current liabilities $100k.|Supplier reviews customer with current assets $150k, current liabilities $100k.",
    "work": "CR=150/100=1.5×",
    "decision": "Cân nhắc cấp tín dụng sau kiểm tra tồn kho, tuổi nợ và lịch thanh toán; 1,5× không đảm bảo trả đúng hạn.|Consider credit after inventory, aging and maturity review; 1.5× does not guarantee timely payment."
  },
  "quick-ratio": {
    "scenario": "Nhà bán lẻ cash $30k, securities $20k, receivables $50k, tồn kho $100k, current liabilities $100k.|Retailer cash $30k, securities $20k, receivables $50k, inventory $100k, current liabilities $100k.",
    "work": "QR=(30+20+50)/100=1.0×",
    "decision": "Khả năng trả nợ không phụ thuộc bán tồn kho theo giả định thu hồi phải thu; stress khách trả chậm.|Ability to cover liabilities without selling inventory assumes collectible receivables; stress late payments."
  },
  "debt-equity": {
    "scenario": "Nhà sản xuất có nợ chịu lãi $60m, book equity $40m; muốn vay thêm $20m, equity không đổi.|Manufacturer has interest-bearing debt $60m, book equity $40m; proposes $20m more debt, equity unchanged.",
    "work": "D/E=60/40=1.5× → 80/40=2.0×",
    "decision": "Kiểm tra covenant, coverage và dòng tiền trước khi tăng nợ; nêu rõ cơ sở book/market.|Review covenants, coverage and cash flow before adding debt; specify book/market basis."
  },
  "interest-cover": {
    "scenario": "Công ty EBIT $90k, tiền lãi trả $30k bằng chi phí lãi vay; stress EBIT giảm 40%.|Firm EBIT $90k, interest payments $30k equal interest expense; stress EBIT down 40%.",
    "work": "Coverage=90/30=3×; stress=54/30=1.8×",
    "decision": "Nếu covenant yêu cầu 2×, stress có thể vi phạm; xem tái cấp vốn và liquidity.|If covenant requires 2×, stress may breach it; assess refinancing and liquidity."
  },
  "dso": {
    "scenario": "Nhà phân phối phải thu bình quân $100k, tổng doanh thu năm $730k, toàn bộ bán chịu; 365 ngày.|Distributor average receivables $100k, annual total revenue $730k, all on credit; 365 days.",
    "work": "DSO=100/730×365=50 days",
    "decision": "So điều khoản 30 ngày; điều tra hóa đơn quá hạn và ưu tiên thu nợ.|Compare with 30-day terms; investigate overdue invoices and prioritize collections."
  },
  "dio": {
    "scenario": "Cửa hàng tồn kho bình quân $100k, COGS năm $730k.|Retailer average inventory $100k, annual COGS $730k.",
    "work": "DIO=100/730×365=50 days",
    "decision": "So với lead time và mục tiêu stock; giảm tồn chậm mà tránh stockout.|Compare lead times and inventory targets; reduce slow stock without causing stockouts."
  },
  "dpo": {
    "scenario": "Nhà máy phải trả bình quân $50k, mua chịu năm $730k.|Factory average payables $50k, annual credit purchases $730k.",
    "work": "DPO=50/730×365=25 days",
    "decision": "Nếu hợp đồng cho 45 ngày, xem kéo dài hợp lý hoặc hưởng chiết khấu sớm; giữ quan hệ nhà cung cấp.|If terms allow 45 days, consider extending or taking early-pay discounts; preserve supplier relationships."
  },
  "irr": {
    "scenario": "Máy tự động cần $100k hôm nay và trả $110k sau 1 năm, không dòng tiền khác.|Automation project costs $100k now, returns $110k in one year, no other flows.",
    "work": "0=−100+110/(1+IRR); IRR=10%",
    "decision": "So hurdle rate phù hợp, đồng thời dùng NPV; IRR cao không tự động tốt hơn dự án khác quy mô.|Compare risk-appropriate hurdle and NPV; higher IRR need not beat a differently sized project."
  },
  "fcff": {
    "scenario": "Analyst định giá công ty EBIT $100m, tax 25%, DA $20m, capex $30m, ΔNWC $10m.|Analyst values firm EBIT $100m, tax 25%, DA $20m, capex $30m, ΔNWC $10m.",
    "work": "FCFF=100×0.75+20−30−10=$55m",
    "decision": "Dự báo FCFF và chiết khấu WACC; chuyển EV sang equity bằng bridge nhất quán.|Forecast FCFF and discount at WACC; bridge EV to equity consistently."
  },
  "fcfe": {
    "scenario": "Cổ đông xem công ty NI $60m, DA $20m, capex $30m, ΔNWC $10m, vay ròng $5m.|Equity analyst reviews NI $60m, DA $20m, capex $30m, ΔNWC $10m, net borrowing $5m.",
    "work": "FCFE=60+20−30−10+5=$45m",
    "decision": "Dùng cost of equity để định giá; kiểm tra khả năng vay bền vững, không nhầm FCFE với cổ tức bắt buộc.|Discount at cost of equity; test sustainable borrowing, not treating FCFE as mandatory dividends."
  },
  "pe": {
    "scenario": "Cổ phiếu giá $50, EPS dự báo $5; peer cùng kỳ P/E 12×.|Stock price $50, forward EPS $5; comparable peer forward P/E 12×.",
    "work": "P/E=50/5=10×; peer-implied price=12×5=$60",
    "decision": "Chiết khấu so peer có thể phản ánh tăng trưởng thấp hoặc rủi ro cao; kiểm tra earnings quality.|Peer discount may reflect lower growth or higher risk; assess earnings quality."
  },
  "pb": {
    "scenario": "Ngân hàng giá $30/cp, common book value $20/cp; peer P/B 1,2×.|Bank trades at $30/share, common book value $20/share; peer P/B 1.2×.",
    "work": "P/B=30/20=1.5×",
    "decision": "Xem premium có được ROE, tăng trưởng và chất lượng tín dụng hỗ trợ hay không.|Test whether ROE, growth and credit quality justify the premium."
  },
  "ev-ebitda": {
    "scenario": "Bên mua so target EV $800m, EBITDA $100m với giao dịch tương đương 7×.|Acquirer compares target EV $800m, EBITDA $100m with comparable deals at 7×.",
    "work": "EV/EBITDA=800/100=8×; 7× implies EV=$700m",
    "decision": "Đàm phán sau chuẩn hóa EBITDA, capex và synergy; EBITDA không phải free cash flow.|Negotiate after normalizing EBITDA, capex and synergies; EBITDA is not free cash flow."
  },
  "terminal": {
    "scenario": "DCF có FCFF năm cuối $100m, g bền vững 3%, WACC 8%.|DCF has terminal-year FCFF $100m, sustainable growth 3%, WACC 8%.",
    "work": "TV=100×1.03/(0.08−0.03)=$2,060m",
    "decision": "Chiết khấu TV từ năm cuối về hiện tại; stress r,g vì phần lớn định giá có thể phụ thuộc TV.|Discount TV from terminal year to today; stress r and g because valuation may depend heavily on TV."
  },
  "mos": {
    "scenario": "Analyst ước tính intrinsic value $100/cp; thị trường $75.|Analyst estimates intrinsic value $100/share; market $75.",
    "work": "MOS=(100−75)/100=25%",
    "decision": "So với biên an toàn yêu cầu; kiểm tra downside nếu intrinsic value giảm, không bảo đảm lỗ tối đa.|Compare with required margin; test downside if intrinsic value falls, not a guaranteed loss cap."
  },
  "current-yield": {
    "scenario": "Quỹ thu nhập xem bond coupon tiền mặt $50/năm, giá $950.|Income fund considers bond paying $50 annual cash coupon at price $950.",
    "work": "CY=50/950≈5.26%",
    "decision": "Dùng ước tính thu nhập hiện tại; so YTM và credit risk trước khi chọn.|Estimate current income; compare YTM and credit risk before choosing."
  },
  "forward-rate": {
    "scenario": "Treasury so khóa lãi năm thứ hai, spot năm 1=4%, năm 2=5% ghép năm.|Treasury evaluates locking second-year rates, annual spots 1y=4%, 2y=5%.",
    "work": "f=(1.05²/1.04)−1≈6.01%",
    "decision": "So báo giá forward với đường cong; không coi mức ngụ ý là dự báo chắc chắn.|Compare forward quote with curve; implied rate is not a certain forecast."
  },
  "dv01": {
    "scenario": "Risk desk có bond position $1m, modified duration 5; stress yield tăng 10bp.|Risk desk holds $1m bond position, modified duration 5; stresses +10bp yield.",
    "work": "DV01≈5×1,000,000×0.0001=$500/bp; ΔP≈−$5,000",
    "decision": "Dùng quản lý hạn mức theo bp và sizing hedge; xem convexity và curve risk.|Manage bp limits and hedge sizing; consider convexity and curve risk."
  },
  "lgd": {
    "scenario": "Ngân hàng dự kiến thu hồi 40% khoản vay $1m nếu default.|Bank expects 40% recovery on $1m exposure if default occurs.",
    "work": "LGD=1−0.40=60%; conditional loss=$600k",
    "decision": "Dùng LGD với PD để tính expected loss; stress thời gian và chi phí thu hồi.|Combine LGD with PD for expected loss; stress recovery timing and costs."
  },
  "put-profit": {
    "scenario": "Quỹ mua put K=$95, premium $3, stock đáo hạn $80, multiplier 100.|Fund buys put K=$95, premium $3, expiry stock $80, multiplier 100.",
    "work": "Profit=(max(95−80,0)−3)×100=$1,200",
    "decision": "Dùng protective put để hạn chế downside của cổ phiếu, tính cả phí premium và vị thế underlying.|Use protective puts to limit equity downside, including premium cost and underlying position."
  },
  "forward-value": {
    "scenario": "Treasury giữ long forward K=$100; forward mới cùng đáo hạn $110, còn 1 năm, r=5%.|Treasury holds long forward K=$100; new same-maturity forward $110, one year left, r=5%.",
    "work": "V=(110−100)/1.05≈$9.52",
    "decision": "Ước tính mark-to-market để đóng hợp đồng; kiểm tra counterparty và collateral.|Estimate mark-to-market for closing; review counterparty and collateral."
  },
  "delta": {
    "scenario": "Trader có long call delta 0,6, underlying tăng $2; 100 cổ phiếu mỗi hợp đồng.|Trader has long call delta 0.6, underlying rises $2; contract multiplier 100.",
    "work": "ΔOption≈0.6×2=$1.20/share; ≈$120/contract",
    "decision": "Có thể short khoảng 60 cổ phiếu để delta hedge ban đầu; gamma làm hedge thay đổi.|Initially short about 60 shares for delta hedge; gamma changes the hedge as prices move."
  },
  "dpi": {
    "scenario": "LP góp $100m, đã nhận phân phối $40m.|LP contributed $100m and received $40m distributions.",
    "work": "DPI=40/100=0.4×",
    "decision": "Đánh giá tiền thực đã thu, không lẫn với NAV; cân nhắc thời gian hoàn vốn.|Assess actual distributions received, distinct from NAV; consider payback timing."
  },
  "rvpi": {
    "scenario": "LP góp $100m, NAV chưa thoái $110m.|LP contributed $100m; unexited NAV $110m.",
    "work": "RVPI=110/100=1.1×",
    "decision": "Đánh giá phụ thuộc định giá chưa thực hiện; kiểm tra exit pipeline và downside NAV.|Assess dependence on unrealized valuations; review exit pipeline and downside NAV."
  },
  "tvpi": {
    "scenario": "Quỹ có DPI 0,4× và RVPI 1,1×, cùng vốn góp.|Fund has DPI 0.4× and RVPI 1.1× on the same paid-in base.",
    "work": "TVPI=0.4+1.1=1.5×",
    "decision": "So vintage tương đồng, tách realized/unrealized và so IRR để xét timing.|Compare similar vintages, separate realized/unrealized value and check IRR for timing."
  },
  "noi": {
    "scenario": "Tòa nhà có effective gross income $200k, operating expenses $80k.|Building has effective gross income $200k, operating expenses $80k.",
    "work": "NOI=200−80=$120k",
    "decision": "Dùng NOI chuẩn hóa với cap rate; lập ngân sách debt service và capex riêng.|Use normalized NOI with cap rate; budget debt service and capex separately."
  },
  "sharpe": {
    "scenario": "Quỹ return 10%, risk-free 2%, volatility 16%, cùng kỳ năm.|Fund return 10%, risk-free 2%, volatility 16%, matched annual basis.",
    "work": "Sharpe=(10−2)/16=0.5",
    "decision": "So với quỹ cùng mandate; kiểm tra drawdown và tính ổn định, không chọn chỉ vì một Sharpe cao.|Compare same-mandate funds; review drawdowns and stability, not a single high Sharpe."
  },
  "sortino": {
    "scenario": "Quỹ return 10%, minimum acceptable return 2%, downside deviation 8%.|Fund return 10%, minimum acceptable return 2%, downside deviation 8%.",
    "work": "Sortino=(10−2)/8=1.0",
    "decision": "Phù hợp đánh giá mục tiêu downside; so các quỹ dùng cùng MAR, kỳ hạn và quy ước.|Evaluate downside objectives; compare funds using same MAR, horizon and convention."
  },
  "beta": {
    "scenario": "Risk team có covariance stock/market 0,03, market variance 0,025.|Risk team measures stock/market covariance 0.03, market variance 0.025.",
    "work": "β=0.03/0.025=1.2",
    "decision": "Dùng beta cho exposure hệ thống và CAPM; xem beta thay đổi theo thời gian.|Use beta for systematic exposure and CAPM; examine time variation."
  },
  "var": {
    "scenario": "Danh mục $1m, volatility ngày 1%, giả định normal mean 0, z 95% = 1,645.|Portfolio $1m, daily volatility 1%, normal zero mean assumed, 95% z=1.645.",
    "work": "VaR=1,000,000×0.01×1.645=$16,450",
    "decision": "So risk limit và chạy stress/ES cho tail vượt VaR; đây không phải lỗ tối đa.|Compare with risk limit and run stress/ES for losses beyond VaR; not maximum loss."
  },
  "rebalance": {
    "scenario": "Danh mục $1m, target equity 60%, equity hiện $700k, không phí hoặc dòng tiền mới.|Portfolio $1m, target equity 60%, current equity $700k, no costs or new flows.",
    "work": "Trade=0.6×1,000,000−700,000=−$100k",
    "decision": "Bán $100k equity và chuyển sang tài sản thiếu tỷ trọng; kiểm tra tax, phí, bands.|Sell $100k equity and allocate to underweights; check tax, costs and bands."
  },
  "funded": {
    "scenario": "Quỹ hưu trí assets $9m, PV liabilities $10m.|Pension fund assets $9m, PV liabilities $10m.",
    "work": "Funded ratio=9/10=90%; deficit=$1m",
    "decision": "Lập kế hoạch đóng góp, LDI và stress lãi suất; không tự động tăng risk chỉ vì thiếu hụt.|Plan contributions, LDI and rate stress; do not automatically increase risk due to a deficit."
  },
  "risk-contribution": {
    "scenario": "Quỹ có hai tài sản, weights 50/50, σ lần lượt 20% và 10%, correlation 0.|Fund has two assets, weights 50/50, volatility 20% and 10%, zero correlation.",
    "work": "σp=√0.0125=11.18%; RC₁=0.01/0.1118≈8.94 pp; RC₂=0.0025/0.1118≈2.24 pp",
    "decision": "Tài sản 1 đóng khoảng 80% rủi ro dù chỉ 50% vốn; điều chỉnh weights nếu mục tiêu risk parity, tính chi phí.|Asset 1 contributes about 80% of risk despite 50% capital; consider weight changes for risk parity, accounting for costs."
  },
  "tracking-error": {
    "scenario": "Quỹ benchmark có active return năm qua 1%, −1%, 3%, −3%; dùng sample SD.|Benchmark-relative fund has annual active returns 1%, −1%, 3%, −3%; use sample SD.",
    "work": "Mean=0%; TE=√((1²+1²+3²+3²)/3)≈2.58%",
    "decision": "So với active-risk mandate; mẫu 4 năm quá nhỏ để kết luận ổn định.|Compare with active-risk mandate; four years is too small to infer stability."
  },
  "mwr": {
    "scenario": "Khách đầu tư $100k hôm nay, không dòng tiền giữa kỳ, nhận $121k sau 2 năm.|Client invests $100k today, no interim flows, receives $121k in two years.",
    "work": "0=−100+121/(1+MWR)²; MWR=10% p.a.",
    "decision": "Dùng IRR theo dòng tiền khách để đánh giá trải nghiệm; với dòng tiền không đều dùng ngày thực.|Use investor cash-flow IRR to assess experience; use actual dates for irregular cash flows."
  },
  "selection": {
    "scenario": "Quỹ so ngành benchmark weight 40%, return ngành portfolio 12%, benchmark ngành 10%.|Fund evaluates sector benchmark weight 40%, portfolio sector return 12%, sector benchmark 10%.",
    "work": "S=0.4×(0.12−0.10)=0.008=+0.8 pp",
    "decision": "Đánh giá chọn chứng khoán theo quy ước Brinson; tách allocation và interaction.|Assess security selection under Brinson convention; separate allocation and interaction."
  },
  "interaction": {
    "scenario": "Quỹ overweight ngành 10 điểm %, cổ phiếu chọn trong ngành vượt benchmark ngành 2 điểm %.|Fund overweights a sector by 10 percentage points; sector holdings beat sector benchmark by 2 points.",
    "work": "I=0.10×0.02=0.002=+0.2 pp",
    "decision": "Giải thích lợi ích kết hợp overweight và chọn tốt; tránh cộng hai lần nếu selection đã gộp interaction.|Explain combined overweight and selection benefit; avoid double counting if selection includes interaction."
  },
  "jensen": {
    "scenario": "Manager có mean return 10%, mean risk-free 2%, mean market return 8%, beta 1 cùng mẫu/kỳ.|Manager mean return 10%, mean risk-free 2%, mean market return 8%, beta 1 estimated on same sample/horizon.",
    "work": "α=(10%−2%)−1×(8%−2%)=2%",
    "decision": "Kiểm tra alpha sau phí và nhiều kỳ, factor exposure và sai số thống kê trước đánh giá skill.|Check net alpha across periods, factor exposures and statistical uncertainty before inferring skill."
  },
  "lbo-moic": {
    "scenario": "PE fund góp $4m, thoái thu $6m, không phân phối giữa kỳ.|PE fund contributes $4m, exits for $6m, no interim distributions.",
    "work": "MOIC=6/4=1.5×",
    "decision": "Nếu exit sau 5 năm, annual IRR≈8,45%; đánh giá thời gian, leverage và downside trước tái đầu tư.|If exit occurs after five years, annual IRR≈8.45%; assess timing, leverage and downside before reinvesting."
  },
  "tax-gain": {
    "scenario": "Khách bán lô cổ phiếu $100k, tax basis $90k, giả định thuế lãi vốn 20%, không miễn giảm.|Client sells stock lot $100k, basis $90k, assumed 20% capital gains tax, no relief.",
    "work": "Tax=(100−90)×0.20=$2k; net proceeds=$98k",
    "decision": "So các lô có basis khác khi tax-lot selection được phép; kiểm tra luật và mục tiêu dài hạn.|Compare lots with different bases where selection is allowed; verify law and long-term objectives."
  },
  "active-return": {
    "scenario": "Quỹ cổ phiếu return 9%, benchmark phù hợp 7% cùng kỳ, cùng cơ sở phí.|Equity fund earns 9%, appropriate benchmark 7%, same period and fee basis.",
    "work": "AR=9%−7%=+2 pp",
    "decision": "Phân rã attribution và so tracking error; active return dương không tự chứng minh alpha.|Decompose attribution and compare tracking error; positive active return does not establish alpha."
  }
};
