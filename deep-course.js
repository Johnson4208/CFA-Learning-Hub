(function(){
  const tr=value=>value&&value.includes('|')?translated(value):value;
  const esc=value=>escapeText(String(value??''));
  const officialCurriculum='https://www.cfainstitute.org/programs/cfa-program/curriculum';
  const officialCbok='https://www.cfainstitute.org/programs/cfa-program/candidate-resources/cbok';
  const ethicsSource='https://www.cfainstitute.org/standards/professionals/code-ethics-standards';

  const fullUnit=(id,title,lead,points,caseTitle,caseFacts,caseQuestion,solution,extra={})=>({
    id,title,lead,points,caseTitle,caseFacts,caseQuestion,solution,...extra
  });
  const outline=(id,title)=>({id,title});
  const planned=(id,group,code,title,description,levels,batch,unitTitles,source=officialCbok)=>({
    id,group,code,title,description,levels,batch,status:'planned',source,
    units:unitTitles.map((title,index)=>outline('u'+(index+1),title))
  });

  const courses=[
    {
      id:'business-foundations',group:'foundation',code:'FND 01',status:'ready',batch:1,levels:['I','II','III'],
      title:'Hiểu về doanh nghiệp|Understanding a Business',
      description:'Hiểu cách doanh nghiệp tạo giá trị, kiếm tiền, tái đầu tư và chuyển lợi thế cạnh tranh thành dòng tiền.|Understand how a business creates value, earns money, reinvests and converts competitive advantage into cash flow.',
      source:officialCbok,
      units:[
        fullUnit('business-model','Mô hình kinh doanh và chuỗi giá trị|Business model and value chain',
          'Một mô hình kinh doanh tốt trả lời được bốn câu hỏi: phục vụ ai, giải quyết vấn đề gì, cung cấp giá trị bằng hoạt động nào và giữ lại bao nhiêu giá trị dưới dạng lợi nhuận hoặc dòng tiền.|A useful business model answers four questions: whom it serves, what problem it solves, which activities deliver the value and how much value remains as profit or cash.',
          ['Khách hàng và nhu cầu thực sự|Customer and real need','Sản phẩm, kênh bán và quyền định giá|Product, distribution and pricing power','Hoạt động cốt lõi, đối tác và điểm nghẽn|Core activities, partners and bottlenecks','Doanh thu, chi phí và nhu cầu tái đầu tư|Revenue, cost and reinvestment needs'],
          'Ứng dụng giao đồ ăn tăng trưởng nhanh|A fast-growing delivery platform',
          'Nền tảng thu 18 trên mỗi đơn hàng 120. Chi phí tài xế và xử lý là 15, khuyến mại bình quân 5. Số đơn tăng 40% nhưng khuyến mại chưa giảm.|The platform collects 18 on each order of 120. Driver and processing costs are 15 and average promotion is 5. Orders grow 40% but promotions have not fallen.',
          'Tăng trưởng đơn hàng có đồng nghĩa mô hình đã tạo giá trị không?|Does order growth mean the model already creates value?',
          'Chưa. Doanh thu thuần 18 không đủ bù 20 chi phí biến đổi nên mỗi đơn làm giảm 2 trước chi phí cố định. Trước khi định giá tăng trưởng, cần kiểm tra liệu mật độ đơn hàng có thực sự giảm chi phí giao hàng hoặc cho phép giảm khuyến mại mà không làm khách rời đi.|Not yet. Net revenue of 18 does not cover variable costs of 20, so every order loses 2 before fixed costs. Before valuing growth, test whether order density can lower delivery cost or promotions can fall without losing customers.',
          {source:officialCbok}),
        fullUnit('unit-economics','Động lực doanh thu và unit economics|Revenue drivers and unit economics',
          'Tách doanh thu thành các biến có thể kiểm tra: số khách, tần suất mua, số lượng, giá và tỷ lệ giữ chân. Sau đó so lợi nhuận gộp vòng đời khách hàng với chi phí thu hút để biết tăng trưởng có tự tài trợ được không.|Decompose revenue into testable drivers: customers, purchase frequency, volume, price and retention. Then compare customer lifetime gross profit with acquisition cost to see whether growth can fund itself.',
          ['Tăng giá khác với tăng sản lượng|Price growth differs from volume growth','Biên gộp phải tính sau chi phí trực tiếp|Gross margin follows direct costs','Churn quyết định vòng đời khách hàng|Churn determines customer life','CAC phải gồm toàn bộ chi phí thu hút|CAC includes all acquisition spend'],
          'Một sản phẩm SaaS có tăng trưởng nhưng hoàn vốn chậm|A growing SaaS product with slow payback',
          'Phí thuê bao 50 mỗi tháng, biên gộp 80%, churn tháng 4% và CAC là 600. Giả sử churn ổn định và không chiết khấu.|Monthly subscription is 50, gross margin 80%, monthly churn 4% and CAC is 600. Assume stable churn and no discounting.',
          'Tính LTV, tỷ lệ LTV trên CAC và thời gian hoàn vốn đơn giản.|Estimate LTV, LTV-to-CAC and simple payback.',
          'Lợi nhuận gộp tháng là 40. Vòng đời kỳ vọng đơn giản là 25 tháng, nên LTV khoảng 1.000. LTV trên CAC là 1,67 lần và hoàn vốn cần 15 tháng. Chỉ số chưa chứng minh chất lượng nếu churn tăng khi công ty giảm khuyến mại hoặc CAC không gồm lương đội bán hàng.|Monthly gross profit is 40. A simple expected life is 25 months, giving LTV near 1,000. LTV-to-CAC is 1.67 times and payback is 15 months. These figures are not robust if churn rises when promotions stop or CAC excludes sales salaries.',
          {formula:'LTV=frac(ARPU×GM;churn)',symbols:'ARPU là doanh thu tháng trên khách; GM là biên gộp; churn là tỷ lệ khách rời mỗi tháng.|ARPU is monthly revenue per customer; GM is gross margin; churn is monthly customer loss.',source:officialCbok}),
        fullUnit('industry-moat','Cấu trúc ngành và lợi thế cạnh tranh|Industry structure and competitive advantage',
          'Lợi thế cạnh tranh chỉ có ý nghĩa đầu tư khi nó bảo vệ lợi nhuận trước khách hàng, nhà cung cấp, đối thủ hiện tại, sản phẩm thay thế và người mới gia nhập. Hãy tìm bằng chứng trong giá, tỷ lệ giữ chân, chi phí chuyển đổi và lợi nhuận trên vốn.|Competitive advantage matters when it protects economics from customers, suppliers, current rivals, substitutes and entrants. Look for evidence in pricing, retention, switching costs and returns on capital.',
          ['Rào cản gia nhập phải khó sao chép|Entry barriers must be hard to copy','Thị phần lớn chưa chắc có quyền định giá|High share does not ensure pricing power','Lợi thế mạng lưới cần tăng giá trị cho người dùng|Networks must improve user value','ROIC cao chỉ bền khi tái đầu tư được|High ROIC matters when reinvestment remains available'],
          'Hai doanh nghiệp cùng tăng doanh thu 12%|Two firms both grow revenue 12%',
          'Công ty A tăng nhờ giảm giá 15%, churn tăng và biên gộp giảm. Công ty B tăng giá 5%, vẫn giữ 96% khách và biên gộp tăng.|Company A grows after cutting price 15%, while churn rises and gross margin falls. Company B raises price 5%, retains 96% of customers and expands gross margin.',
          'Doanh nghiệp nào có bằng chứng lợi thế cạnh tranh mạnh hơn?|Which company shows stronger evidence of competitive advantage?',
          'Công ty B có bằng chứng tốt hơn vì tăng giá mà vẫn giữ khách và cải thiện biên. Tuy nhiên cần kiểm tra chu kỳ hợp đồng, mức độ tập trung khách hàng và phản ứng của đối thủ. Công ty A có thể đang mua tăng trưởng bằng biên lợi nhuận.|Company B has stronger evidence because it raised price while retaining customers and improving margin. Still test contract timing, customer concentration and competitive response. Company A may be purchasing growth with margin.',
          {videoId:'okczJ-XyJnQ',videoTitle:'Corporate governance and durable business quality — Corporate Finance Institute',source:officialCbok}),
        fullUnit('operating-leverage','Đòn bẩy hoạt động và điểm hòa vốn|Operating leverage and break-even',
          'Chi phí cố định cao làm lợi nhuận tăng nhanh sau khi vượt hòa vốn nhưng cũng làm thua lỗ mở rộng khi doanh thu giảm. Tách chi phí cố định, biến đổi và bán biến đổi trước khi dự báo biên lợi nhuận.|High fixed costs accelerate profit after break-even but also magnify losses when revenue falls. Separate fixed, variable and mixed costs before forecasting margins.',
          ['Contribution margin trả cho chi phí cố định trước|Contribution margin covers fixed cost first','Công suất nhàn rỗi làm thay đổi chi phí đơn vị|Idle capacity changes unit cost','Đòn bẩy tài chính khác đòn bẩy hoạt động|Financial leverage differs from operating leverage','Stress test sản lượng, giá và chi phí riêng biệt|Stress volume, price and cost separately'],
          'Nhà máy cân nhắc nhận hợp đồng lớn|A factory considers a large contract',
          'Chi phí cố định năm là 1,2 triệu. Giá bán 100 và chi phí biến đổi 40 mỗi đơn vị. Công suất tối đa 30.000 đơn vị.|Annual fixed cost is 1.2 million. Price is 100 and variable cost 40 per unit. Maximum capacity is 30,000 units.',
          'Điểm hòa vốn là bao nhiêu và biên an toàn ở sản lượng 24.000?|What is break-even and the margin of safety at 24,000 units?',
          'Contribution margin là 60 mỗi đơn vị. Hòa vốn tại 20.000 đơn vị. Ở 24.000 đơn vị, biên an toàn là 4.000 đơn vị hoặc khoảng 16,7% sản lượng dự kiến. Cần kiểm tra hợp đồng có đòi đầu tư thêm công suất hoặc làm tăng chi phí bảo hành không.|Contribution margin is 60 per unit. Break-even is 20,000 units. At 24,000 units, the margin of safety is 4,000 units or about 16.7% of expected volume. Check whether the contract requires new capacity or raises warranty cost.',
          {formula:'Q*=frac(F;P−V)',symbols:'Q* là sản lượng hòa vốn; F là chi phí cố định; P là giá bán đơn vị; V là chi phí biến đổi đơn vị.|Q* is break-even volume; F is fixed cost; P is unit price; V is unit variable cost.',source:officialCbok}),
        fullUnit('business-memo','Từ phân tích doanh nghiệp đến bản ghi nhớ đầu tư|From business analysis to an investment memo',
          'Một bản ghi nhớ tốt phân biệt dữ kiện, giả định và kết luận. Nó giải thích động lực doanh thu, lợi nhuận, dòng tiền, nhu cầu vốn, rủi ro phá vỡ luận điểm và điều kiện phải xem xét lại.|A sound memo separates facts, assumptions and conclusions. It explains revenue drivers, profit, cash, capital needs, thesis breakers and review triggers.',
          ['Luận điểm phải kiểm chứng được|The thesis must be testable','Base, bull và bear dùng giả định nhất quán|Base, bull and bear use consistent assumptions','Rủi ro phải gắn với chỉ báo theo dõi|Risks need monitoring indicators','Giá trị tốt không đồng nghĩa cổ phiếu tốt ở mọi giá|A good business is not a good stock at every price'],
          'Nhà sản xuất tăng lợi nhuận nhưng giảm tiền mặt|A manufacturer grows profit while cash falls',
          'Doanh thu 100, EBIT 15, tiền từ hoạt động 5, capex 12. Phải thu và tồn kho cùng tăng nhanh hơn doanh thu. Ban điều hành gọi đây là đầu tư cho tăng trưởng.|Revenue is 100, EBIT 15, operating cash flow 5 and capex 12. Receivables and inventory both grow faster than sales. Management calls this investment for growth.',
          'Kết luận sơ bộ nên là mua, tránh hay tiếp tục điều tra?|Should the preliminary decision be buy, avoid or investigate further?',
          'Tiếp tục điều tra. Lợi nhuận chưa chuyển thành tiền và dòng tiền tự do đang âm 7. Cần kiểm tra tuổi nợ, đơn hàng đã xác nhận, hàng tồn chậm luân chuyển, điều khoản nhà cung cấp và nhu cầu capex duy trì. Chỉ coi đây là tăng trưởng tốt khi vốn lưu động quay về tiền theo lịch đáng tin cậy.|Investigate further. Earnings have not converted to cash and free cash flow is negative 7. Test receivable aging, confirmed orders, slow inventory, supplier terms and maintenance capex. Treat this as healthy growth only if working capital converts to cash on a credible schedule.',
          {source:officialCbok})
      ]
    },
    {
      id:'corporate-law',group:'foundation',code:'FND 02',status:'ready',batch:1,levels:['I','II','III'],
      title:'Pháp lý doanh nghiệp và quản trị|Corporate Law and Governance',
      description:'Đọc cấu trúc pháp lý, quyền hạn, trách nhiệm, quyền cổ đông và thứ tự ưu tiên trước khi phân tích giá trị.|Read legal form, authority, duties, shareholder rights and claim priority before assessing value.',
      source:'https://www.sba.gov/business-guide/launch-your-business/choose-business-structure',
      disclaimer:'Nội dung là khung phân tích tài chính, không phải tư vấn pháp lý; quy định thay đổi theo quốc gia.|This is a financial-analysis framework, not legal advice; rules vary by jurisdiction.',
      units:[
        fullUnit('legal-forms','Loại hình pháp lý và trách nhiệm|Legal forms and liability',
          'Phân biệt chủ sở hữu cá nhân, hợp danh, công ty trách nhiệm hữu hạn và công ty cổ phần theo pháp nhân, trách nhiệm, thuế, khả năng huy động vốn và tính liên tục. Nhà đầu tư luôn phải xác định ai thực sự mang nghĩa vụ.|Compare sole ownership, partnerships, limited-liability entities and corporations by legal personality, liability, tax, financing capacity and continuity. Investors must identify who actually bears the obligation.',
          ['Pháp nhân tách tài sản doanh nghiệp khỏi chủ sở hữu|Separate personality divides company and owner assets','Trách nhiệm hữu hạn có ngoại lệ|Limited liability has exceptions','Bảo lãnh cá nhân chuyển rủi ro trở lại chủ sở hữu|Personal guarantees return risk to owners','Hình thức pháp lý ảnh hưởng khả năng phát hành vốn|Legal form affects financing choices'],
          'Khoản vay có bảo lãnh của người sáng lập|A founder-guaranteed loan',
          'Công ty trách nhiệm hữu hạn vay 2 triệu. Người sáng lập ký bảo lãnh cá nhân toàn bộ khoản vay. Công ty mất khả năng thanh toán.|A limited-liability company borrows 2 million. Its founder personally guarantees the full loan. The company becomes insolvent.',
          'Có thể kết luận tài sản cá nhân luôn được bảo vệ không?|Can personal assets be assumed protected?',
          'Không. Vỏ bọc trách nhiệm hữu hạn bảo vệ cổ đông đối với nghĩa vụ thông thường của công ty, nhưng bảo lãnh tạo nghĩa vụ hợp đồng riêng của người sáng lập. Phải đọc phạm vi, giới hạn và điều kiện thực thi của bảo lãnh trong luật áp dụng.|No. Limited liability protects owners from ordinary company obligations, but the guarantee creates a separate contractual obligation. Read its scope, cap and enforcement conditions under applicable law.',
          {source:'https://www.sba.gov/business-guide/launch-your-business/choose-business-structure'}),
        fullUnit('authority-contracts','Hợp đồng, đại diện và quyền ký|Contracts, agency and signing authority',
          'Một hợp đồng chỉ tạo giá trị khi bên ký có thẩm quyền, nghĩa vụ rõ, điều kiện có thể thực hiện và chế tài có ý nghĩa. Trong thẩm định, đối chiếu hợp đồng với điều lệ, ủy quyền và phê duyệt nội bộ.|A contract creates value only when signatories have authority, obligations are clear, performance is feasible and remedies matter. In diligence, reconcile contracts with charters, delegations and approvals.',
          ['Quyền thực tế và quyền biểu kiến có thể khác nhau|Actual and apparent authority can differ','Điều kiện tiên quyết ảnh hưởng thời điểm nghĩa vụ|Conditions precedent affect timing','Covenant có thể hạn chế vay, cổ tức và đầu tư|Covenants can restrict debt, dividends and investment','Thay đổi quyền kiểm soát có thể kích hoạt chấm dứt|Change of control may trigger termination'],
          'Giám đốc bán hàng ký hợp đồng vượt hạn mức|A sales director signs above the limit',
          'Quy chế nội bộ giới hạn giám đốc ở 500.000 nhưng họ ký hợp đồng 1,5 triệu. Khách hàng đã giao hàng và trước đây công ty từng chấp nhận giao dịch tương tự.|Internal rules limit a director to 500,000, but they sign for 1.5 million. The counterparty has delivered and the company previously accepted similar transactions.',
          'Nhà phân tích nên ghi nhận nghĩa vụ bằng không hay toàn bộ?|Should an analyst record zero obligation or the full amount?',
          'Không nên tự kết luận bằng không chỉ từ hạn mức nội bộ. Hành vi trước đó có thể tạo quyền biểu kiến hoặc công ty có thể phê chuẩn sau. Ghi nhận rủi ro tranh chấp, xin ý kiến pháp lý và phân tích cả kịch bản hợp đồng có hiệu lực lẫn vô hiệu.|Do not assume zero obligation from an internal limit alone. Prior conduct may create apparent authority or the company may ratify the contract. Flag litigation risk, obtain legal advice and analyze both enforceable and unenforceable scenarios.',
          {source:'https://www.sba.gov/business-guide/manage-your-business/prepare-your-business-emergencies'}),
        fullUnit('board-duties','Hội đồng quản trị, nghĩa vụ và kiểm soát|Board duties and oversight',
          'Hội đồng phê duyệt chiến lược, giám sát điều hành, quản trị rủi ro và bảo vệ lợi ích của tổ chức. Nhà đầu tư đánh giá tính độc lập thực chất, năng lực, thông tin nhận được và cơ chế xử lý xung đột.|Boards approve strategy, oversee management, govern risk and protect the organization. Investors assess substantive independence, expertise, information quality and conflict controls.',
          ['Độc lập danh nghĩa chưa đủ|Nominal independence is insufficient','Ủy ban kiểm toán cần năng lực tài chính|Audit committees need financial expertise','Thù lao có thể bóp méo hành vi|Compensation can distort behavior','Giao dịch bên liên quan cần quy trình riêng|Related-party deals need special controls'],
          'Mua tài sản của người thân CEO|Buying an asset from the CEO’s relative',
          'Công ty dự định mua nhà kho giá 12 triệu từ doanh nghiệp của người thân CEO. Không có định giá độc lập; CEO tham gia cuộc họp phê duyệt.|A company plans to buy a warehouse for 12 million from the CEO’s relative. There is no independent valuation and the CEO joins the approval meeting.',
          'Những bước kiểm soát tối thiểu nào cần có?|What minimum controls are needed?',
          'Công bố đầy đủ quan hệ, để người có xung đột rút khỏi thảo luận và biểu quyết, dùng ủy ban độc lập, lấy định giá và phương án so sánh, ghi rõ lợi ích cho công ty và tuân thủ yêu cầu biểu quyết của luật áp dụng. Giá thị trường hợp lý không tự chữa một quy trình yếu.|Disclose the relationship, recuse the conflicted executive, use an independent committee, obtain valuation and alternatives, document company benefit and follow applicable voting rules. A fair price does not by itself cure a weak process.',
          {videoId:'okczJ-XyJnQ',videoTitle:'Corporate Governance: Boards, Executives, and Financial Oversight — CFI',source:officialCurriculum}),
        fullUnit('shareholder-rights','Quyền cổ đông và hành động vốn|Shareholder rights and capital actions',
          'Quyền biểu quyết, quyền kinh tế, quyền ưu tiên, điều khoản chống pha loãng và cơ cấu nhiều lớp quyết định ai kiểm soát doanh nghiệp và ai chịu tác động của phát hành mới.|Voting, economic, pre-emption, anti-dilution and dual-class terms determine control and who bears the effect of new issuance.',
          ['Một cổ phần không phải lúc nào cũng một phiếu|One share may not equal one vote','Phát hành mới có thể pha loãng kinh tế và quyền kiểm soát|New issues can dilute economics and control','Mua lại cổ phiếu chỉ tạo giá trị ở mức giá phù hợp|Buybacks create value only at an appropriate price','Cổ tức bị giới hạn bởi thanh khoản và luật|Dividends face liquidity and legal limits'],
          'Phát hành riêng lẻ dưới giá thị trường|A discounted private placement',
          'Công ty có 10 triệu cổ phần giá 10, phát hành 2 triệu cổ phần cho cổ đông kiểm soát với giá 6. Cổ đông khác không được mua.|A company has 10 million shares at 10 and issues 2 million shares to the controlling owner at 6. Other owners cannot participate.',
          'Tác động kinh tế sơ bộ đối với cổ đông thiểu số là gì?|What is the preliminary economic effect on minority owners?',
          'Công ty nhận 12 triệu nhưng phát hành quyền đối với giá trị thị trường khoảng 20 triệu trước giao dịch. Phần chênh 8 triệu là chuyển giao giá trị tiềm năng khỏi cổ đông cũ, trước khi xét mục đích vốn và phản ứng giá. Cần kiểm tra quyền ưu tiên, phê duyệt độc lập và nghĩa vụ công bố.|The company receives 12 million for claims worth roughly 20 million at the pre-deal price. The 8 million gap is a potential transfer from existing owners before considering funding purpose and market response. Review pre-emption rights, independent approval and disclosure duties.',
          {source:officialCurriculum}),
        fullUnit('distress-priority','Mất khả năng thanh toán và thứ tự ưu tiên|Distress and claim priority',
          'Khi doanh nghiệp thiếu tiền, giá trị phân bổ theo quyền pháp lý chứ không theo tên gọi kế toán đơn giản. Phân biệt nợ có bảo đảm, chi phí thủ tục, nợ ưu tiên, nợ không bảo đảm, nợ thứ cấp và vốn chủ.|When cash is insufficient, value follows legal rights rather than simple accounting labels. Distinguish secured debt, process costs, priority claims, unsecured debt, subordinated debt and equity.',
          ['Tài sản bảo đảm quyết định nguồn thu hồi riêng|Collateral creates a specific recovery pool','Covenant breach không luôn đồng nghĩa phá sản|A covenant breach is not always insolvency','Giá trị hoạt động liên tục có thể cao hơn thanh lý|Going-concern value may exceed liquidation value','Equity là phần còn lại sau mọi nghĩa vụ|Equity is residual after all claims'],
          'Phân bổ giá trị thanh lý|Distributing liquidation value',
          'Tiền thu ròng là 70. Nợ có bảo đảm 40, chi phí và nghĩa vụ ưu tiên 5, nợ không bảo đảm 50, vốn chủ 30.|Net proceeds are 70. Secured debt is 40, process and priority claims 5, unsecured debt 50 and equity 30.',
          'Giả sử thứ tự đơn giản trên, mỗi nhóm thu hồi bao nhiêu?|Under the simplified priority, what does each class recover?',
          'Nợ có bảo đảm nhận 40, chi phí và ưu tiên nhận 5, còn 25 cho nợ không bảo đảm nên nhóm này thu hồi 50%. Vốn chủ không nhận gì. Trong thực tế phải xác định tài sản bảo đảm, quyền bù trừ và luật phá sản cụ thể.|Secured debt receives 40, process and priority claims 5, leaving 25 for unsecured debt, a 50% recovery. Equity receives zero. Actual analysis must identify collateral, set-off rights and jurisdiction-specific insolvency law.',
          {source:'https://www.sba.gov/business-guide/manage-your-business/close-or-sell-your-business'})
      ]
    },
    {
      id:'accounting-foundations',group:'foundation',code:'FND 03',status:'ready',batch:1,levels:['I','II','III'],
      title:'Nền tảng kế toán|Accounting Foundations',
      description:'Hiểu logic ghi nhận, mối liên kết ba báo cáo và cách chính sách kế toán làm thay đổi lợi nhuận, tài sản và dòng tiền.|Understand recognition logic, the three-statement link and how policies change earnings, assets and cash flow.',
      source:officialCurriculum,
      units:[
        fullUnit('accounting-equation','Phương trình kế toán và bút toán kép|Accounting equation and double entry',
          'Mọi giao dịch phải giữ cân bằng giữa nguồn lực và nguồn tài trợ. Bút toán kép không bảo đảm số liệu đúng về kinh tế, nhưng tạo cấu trúc để truy ngược tác động lên tài sản, nợ, vốn, doanh thu và chi phí.|Every transaction preserves the balance between resources and financing. Double entry does not guarantee economic truth, but it creates a structure for tracing effects on assets, liabilities, equity, revenue and expense.',
          ['Tài sản là nguồn lực do doanh nghiệp kiểm soát|Assets are controlled resources','Nợ là nghĩa vụ hiện tại|Liabilities are present obligations','Vốn chủ là phần còn lại|Equity is the residual','Doanh thu và chi phí chảy vào lợi nhuận giữ lại|Revenue and expense flow into retained earnings'],
          'Thành lập công ty và mua thiết bị|Forming a company and buying equipment',
          'Chủ sở hữu góp 100 tiền mặt. Công ty vay thêm 50 rồi mua thiết bị 120 bằng tiền.|Owners contribute 100 cash. The company borrows 50 and buys equipment for 120 cash.',
          'Bảng cân đối ngay sau giao dịch gồm những gì?|What does the immediate balance sheet contain?',
          'Tiền mặt còn 30 và thiết bị 120, tổng tài sản 150. Nợ vay 50 và vốn góp 100. Chưa có chi phí 120 ngay lập tức nếu thiết bị đáp ứng điều kiện ghi nhận tài sản; chi phí sẽ đi qua khấu hao theo thời gian sử dụng.|Cash is 30 and equipment 120, total assets 150. Debt is 50 and contributed equity 100. The 120 is not immediately expensed if asset recognition criteria are met; depreciation allocates cost over useful life.',
          {formula:'A=L+E',symbols:'A là tài sản; L là nợ phải trả; E là vốn chủ sở hữu.|A is assets; L is liabilities; E is equity.',source:officialCurriculum}),
        fullUnit('three-statements','Ba báo cáo tài chính liên kết thế nào|How the three statements connect',
          'Báo cáo kết quả đo hiệu quả theo kỳ, bảng cân đối là ảnh chụp cuối kỳ và lưu chuyển tiền giải thích biến động tiền. Lợi nhuận không bằng tiền vì ghi nhận dồn tích, khấu hao và vốn lưu động.|The income statement measures period performance, the balance sheet is an end-date snapshot and cash flow explains the change in cash. Profit differs from cash because of accruals, depreciation and working capital.',
          ['Lợi nhuận giữ lại nối kết quả với vốn chủ|Retained earnings links income to equity','Khấu hao giảm lợi nhuận nhưng không phải chi tiền kỳ hiện tại|Depreciation reduces income without current cash payment','Capex xuất hiện trong đầu tư trước khi đi qua chi phí|Capex enters investing before expense','Biến động vốn lưu động điều chỉnh CFO|Working-capital changes adjust CFO'],
          'Bán chịu sau khi đã mua hàng tồn kho|A credit sale after inventory was purchased',
          'Hàng tồn kho giá 60 đã trả kỳ trước được giao cho khách với giá 100, khách trả sau 30 ngày.|Inventory costing 60 was paid last period and is delivered for 100, with customer payment due in 30 days.',
          'Điều gì thay đổi tại ngày giao hàng?|What changes on the delivery date?',
          'Doanh thu tăng 100, giá vốn tăng 60 và lợi nhuận trước thuế tăng 40. Phải thu tăng 100, tồn kho giảm 60, vốn chủ tăng theo lợi nhuận. Tiền chưa tăng. Khi khách trả, tiền tăng 100 và phải thu giảm 100; không ghi doanh thu lần nữa.|Revenue rises 100, cost of sales 60 and pretax profit 40. Receivables rise 100, inventory falls 60 and equity rises through profit. Cash does not change. On collection, cash rises 100 and receivables fall 100; revenue is not recorded again.',
          {videoId:'CE9HnV3b_jY',videoTitle:'The 3 Financial Statements Explained: How They Connect — Ryan O’Connell, CFA, FRM',source:officialCurriculum}),
        fullUnit('accrual-working-capital','Dồn tích, doanh thu và vốn lưu động|Accruals, revenue and working capital',
          'Kế toán dồn tích ghi nhận khi quyền và nghĩa vụ kinh tế phát sinh, không chỉ khi tiền di chuyển. Doanh thu cần được gắn với việc thực hiện nghĩa vụ; khoản thu trước thường tạo nợ hợp đồng.|Accrual accounting records economic rights and obligations rather than only cash movement. Revenue follows performance; advance receipts often create a contract liability.',
          ['Tiền thu trước chưa chắc là doanh thu|Cash received in advance may not be revenue','Phải thu tăng có thể phản ánh tăng trưởng hoặc thu tiền kém|Receivables growth can mean growth or weak collection','Phải trả tăng tạm thời hỗ trợ CFO|Payables growth temporarily supports CFO','Doanh thu và chi phí cần đúng kỳ|Revenue and expense belong in the correct period'],
          'Gói thuê bao trả trước một năm|A prepaid annual subscription',
          'Khách trả 1.200 ngày 1 tháng 1 cho dịch vụ cung cấp đều trong 12 tháng. Bỏ qua thuế.|A customer pays 1,200 on 1 January for service delivered evenly over 12 months. Ignore tax.',
          'Cuối tháng 3 ghi nhận bao nhiêu doanh thu và nợ hợp đồng?|At the end of March, how much revenue and contract liability are recognized?',
          'Doanh thu lũy kế là 300 vì đã cung cấp ba trong mười hai tháng. Tiền vẫn tăng 1.200; nợ hợp đồng còn 900. Ghi toàn bộ 1.200 vào tháng 1 sẽ kéo doanh thu và lợi nhuận về quá sớm.|Cumulative revenue is 300 because three of twelve months have been delivered. Cash remains up 1,200 and the contract liability is 900. Recording all 1,200 in January would accelerate revenue and profit.',
          {source:officialCurriculum}),
        fullUnit('cost-allocation','Hàng tồn kho, khấu hao và vốn hóa|Inventory, depreciation and capitalization',
          'Lựa chọn dòng chi phí và thời gian hữu ích thay đổi thời điểm ghi chi phí, không thay đổi tổng tiền đã trả. Nhà phân tích chuẩn hóa chính sách trước khi so biên lợi nhuận và lợi nhuận trên tài sản.|Cost flow assumptions and useful lives change expense timing, not total cash paid. Analysts normalize policies before comparing margins and returns on assets.',
          ['FIFO và bình quân cho giá vốn khác nhau khi giá biến động|FIFO and average cost differ when prices move','Khấu hao phụ thuộc nguyên giá, giá trị còn lại và thời gian|Depreciation depends on cost, residual value and life','Vốn hóa đẩy chi phí sang tương lai|Capitalization defers expense','Thay đổi ước tính phải được tách khỏi cải thiện vận hành|Estimate changes should be separated from operations'],
          'Kéo dài thời gian khấu hao|Extending useful life',
          'Thiết bị giá 100, không có giá trị còn lại. Công ty đổi thời gian hữu ích từ 5 lên 10 năm ngay khi mua, dùng đường thẳng.|Equipment costs 100 with no residual value. The company changes the useful life from five to ten years at purchase and uses straight line.',
          'Ảnh hưởng năm đầu lên lợi nhuận và tiền mặt là gì?|What is the first-year effect on income and cash?',
          'Khấu hao giảm từ 20 xuống 10, nên lợi nhuận trước thuế tăng 10 so với ước tính 5 năm. Tiền mặt không đổi chỉ vì ước tính kế toán. Phải đánh giá liệu tuổi thọ 10 năm có bằng chứng kỹ thuật và điều chỉnh so sánh với đối thủ.|Depreciation falls from 20 to 10, raising pretax income by 10 versus a five-year life. Cash is unchanged by the accounting estimate itself. Test whether the ten-year life has technical support and normalize peer comparisons.',
          {source:officialCurriculum}),
        fullUnit('earnings-quality','Chất lượng lợi nhuận và dấu hiệu cảnh báo|Earnings quality and warning signs',
          'Lợi nhuận chất lượng cao có nguồn từ hoạt động bền vững, được tiền mặt hỗ trợ và dựa trên ước tính hợp lý. Không một tỷ lệ đơn lẻ chứng minh sai phạm; cần kết hợp xu hướng, thuyết minh và bằng chứng sau ngày khóa sổ.|High-quality earnings come from durable operations, are supported by cash and use reasonable estimates. No single ratio proves misconduct; combine trends, disclosures and subsequent evidence.',
          ['Doanh thu tăng nhanh hơn phải thu là tín hiệu tốt hơn chiều ngược lại|Revenue growing faster than receivables is generally healthier','Lợi nhuận một lần cần tách khỏi kết quả lặp lại|One-off gains should be separated','Vốn hóa chi phí làm tăng lợi nhuận hiện tại|Capitalized costs raise current income','Thu tiền sau ngày khóa sổ kiểm tra chất lượng phải thu|Subsequent collection tests receivable quality'],
          'Lợi nhuận tăng nhưng tiền giảm|Earnings rise while cash falls',
          'Doanh thu tăng 8%, phải thu tăng 45%, tồn kho tăng 35%, CFO giảm 30% và công ty vừa nới điều khoản tín dụng từ 30 lên 90 ngày.|Revenue grows 8%, receivables 45%, inventory 35%, CFO falls 30% and credit terms move from 30 to 90 days.',
          'Có thể kết luận gian lận ngay không và cần kiểm tra gì?|Can fraud be concluded immediately and what should be tested?',
          'Chưa thể kết luận gian lận. Rủi ro chất lượng lợi nhuận đã tăng. Kiểm tra tuổi nợ, thu tiền sau kỳ, trả hàng, giao dịch cuối kỳ, hàng chậm luân chuyển, hợp đồng và lý do thay đổi tín dụng. Xây dựng kịch bản dự phòng nếu một phần phải thu hoặc tồn kho không chuyển thành tiền.|Fraud cannot yet be concluded. Earnings-quality risk has risen. Test aging, subsequent collections, returns, period-end sales, slow inventory, contracts and the reason for changed credit. Build a downside case if some receivables or inventory fail to convert to cash.',
          {source:officialCurriculum})
      ]
    },
    {
      id:'ethics',group:'core',code:'CFA 01',status:'ready',batch:1,levels:['I','II','III'],
      title:'Đạo đức và chuẩn mực nghề nghiệp|Ethical and Professional Standards',
      description:'Dùng quy trình ra quyết định có thể kiểm chứng để xử lý thông tin, nghĩa vụ với khách hàng, nghiên cứu và xung đột lợi ích.|Use a defensible decision process for information, client duties, research and conflicts.',
      source:ethicsSource,
      units:[
        fullUnit('ethical-framework','Khung ra quyết định đạo đức|Ethical decision framework',
          'Bắt đầu bằng sự kiện và bên liên quan, xác định nghĩa vụ, xem xét phương án và hậu quả, xin ý kiến độc lập khi cần, rồi ghi lại lý do. Một quyết định hợp pháp vẫn có thể thiếu đạo đức nếu lợi dụng lỗ hổng hoặc che giấu xung đột.|Start with facts and stakeholders, identify duties, consider alternatives and consequences, seek independent advice when needed and document the rationale. A legal decision can still be unethical if it exploits a loophole or hides a conflict.',
          ['Tách dữ kiện khỏi giả định|Separate facts from assumptions','Xác định người chịu rủi ro và người hưởng lợi|Identify who bears risk and receives benefit','Kiểm tra luật, quy tắc và chính sách nghiêm ngặt nhất|Check the strictest applicable rule','Ghi lại quyết định và điều kiện xem xét lại|Document the decision and review triggers'],
          'Áp lực làm đẹp kết quả cuối quý|Pressure to improve quarter-end results',
          'Quản lý yêu cầu trì hoãn ghi nhận một chi phí hợp lệ sang quý sau vì công ty đang đàm phán vay vốn. Số tiền không làm công ty mất khả năng thanh toán nhưng ảnh hưởng covenant.|A manager asks to defer a valid expense to the next quarter because the company is negotiating a loan. The amount does not cause insolvency but affects a covenant.',
          'Nhà phân tích nội bộ nên phản ứng thế nào?|How should an internal analyst respond?',
          'Xác minh cơ sở ghi nhận và chính sách, từ chối điều chỉnh không có căn cứ, lưu tài liệu và chuyển vấn đề tới kiểm soát, kiểm toán hoặc pháp chế thích hợp. Ý định hỗ trợ doanh nghiệp không biện minh cho báo cáo sai đối với bên cho vay.|Verify recognition and policy, refuse an unsupported adjustment, retain documentation and escalate to appropriate control, audit or legal functions. An intent to help the firm does not justify misleading the lender.',
          {source:ethicsSource}),
        fullUnit('mnpi','Thông tin trọng yếu chưa công khai|Material nonpublic information',
          'Thông tin là trọng yếu khi nhà đầu tư hợp lý có thể xem nó quan trọng; là chưa công khai khi chưa được phổ biến rộng rãi. Người nhận không được giao dịch hoặc khiến người khác giao dịch trên cơ sở thông tin đó.|Information is material when a reasonable investor would consider it important and nonpublic when it has not been broadly disseminated. A recipient must not trade or cause others to trade on it.',
          ['Nguồn đáng tin làm tăng khả năng trọng yếu|Source reliability affects materiality','Tin đồn công khai không tự làm thông tin riêng thành công khai|Public rumors do not cleanse private facts','Mosaic theory dùng thông tin công khai và không trọng yếu|Mosaic theory uses public and immaterial information','Báo tuân thủ và hạn chế giao dịch khi nghi ngờ|Notify compliance and restrict trading when in doubt'],
          'Cuộc gọi riêng trước giờ đóng cửa|A private call before the close',
          'Giám đốc nói riêng rằng công ty vừa mất khách hàng tạo 22% doanh thu. Chưa có thông báo; quỹ đang nắm cổ phiếu.|A director privately says the company lost a customer representing 22% of revenue. There is no announcement and the fund owns the stock.',
          'Có thể bán một nửa vị thế cho tài khoản cá nhân không?|Can half the position be sold in a personal account?',
          'Không. Quy mô và chủ tài khoản không thay đổi bản chất thông tin. Ghi nhận thời gian và nguồn, ngừng giao dịch và khuyến nghị liên quan, báo tuân thủ và chờ phổ biến rộng rãi trước khi đánh giá lại.|No. Trade size and account ownership do not change the information. Record time and source, stop related trading and recommendations, notify compliance and wait for broad dissemination before reassessing.',
          {source:ethicsSource}),
        fullUnit('client-duties','Nghĩa vụ với khách hàng và tính phù hợp|Duties to clients and suitability',
          'Lợi ích khách hàng đứng trước lợi ích của người tư vấn. Khuyến nghị phải phù hợp với mục tiêu, rủi ro, thời hạn, thanh khoản và toàn bộ danh mục; giao dịch phải được phân bổ công bằng theo chính sách đã công bố.|Client interests come before adviser interests. Recommendations must fit objectives, risk, horizon, liquidity and the total portfolio; trades should be allocated fairly under disclosed policy.',
          ['Cập nhật hồ sơ khi hoàn cảnh thay đổi|Update the profile when circumstances change','Phù hợp được đánh giá trong toàn danh mục|Suitability is assessed in portfolio context','Không bảo đảm lợi nhuận không chắc chắn|Do not guarantee uncertain returns','Bảo mật có ngoại lệ theo luật và nghĩa vụ|Confidentiality has legal and duty-based exceptions'],
          'Khách hàng sắp mua nhà nhưng muốn đầu cơ|A home buyer wants to speculate',
          'Khách cần toàn bộ 300.000 trong 10 tháng để trả trước nhà nhưng yêu cầu đầu tư vào quyền chọn công nghệ vì tin thị trường sẽ tăng.|A client needs all 300,000 in ten months for a home deposit but asks to buy technology options because they expect a rally.',
          'Chỉ cần khách ký xác nhận rủi ro là đủ không?|Is a signed risk acknowledgment sufficient?',
          'Không. Chữ ký không biến một khuyến nghị không phù hợp thành phù hợp. Giải thích xung đột với mục tiêu thanh khoản, đề xuất công cụ bảo toàn phù hợp và ghi lại trao đổi. Nếu khách tự quyết trái tư vấn, thực hiện chỉ khi chính sách, pháp luật và phạm vi dịch vụ cho phép.|No. A signature does not make an unsuitable recommendation suitable. Explain the conflict with liquidity, propose an appropriate capital-preservation solution and document the discussion. If the client directs otherwise, proceed only if policy, law and service scope permit.',
          {source:ethicsSource}),
        fullUnit('research-basis','Cơ sở nghiên cứu và giao tiếp với khách hàng|Research basis and client communication',
          'Khuyến nghị cần cơ sở hợp lý, quy trình thẩm định đủ sâu và phân biệt dữ kiện với ý kiến. Trình bày phương pháp, giả định quan trọng, giới hạn và rủi ro có thể làm thay đổi kết luận.|Recommendations need a reasonable basis, sufficient diligence and a distinction between fact and opinion. Communicate method, key assumptions, limitations and risks that could change the conclusion.',
          ['Kiểm tra chất lượng nguồn dữ liệu|Assess source quality','Không chọn dữ liệu chỉ vì ủng hộ kết luận|Do not cherry-pick supporting data','Công bố thay đổi lớn trong mô hình|Disclose material model changes','Lưu hồ sơ đủ để tái tạo phân tích|Keep records that reproduce the analysis'],
          'Mô hình định giá bỏ qua một kịch bản xấu|A valuation omits a downside case',
          'Báo cáo ghi giá mục tiêu 25 nhưng chỉ dùng tăng trưởng 8% và WACC 7%; lịch sử doanh nghiệp cho thấy doanh thu từng giảm 20% trong suy thoái.|A report gives a target of 25 using only 8% growth and 7% WACC; company history shows revenue once fell 20% in recession.',
          'Có thể phát hành báo cáo nếu gọi đây là kịch bản cơ sở không?|Can the report be issued if this is labeled the base case?',
          'Chỉ nên phát hành sau khi trình bày độ nhạy hoặc kịch bản giảm, giải thích cơ sở của tăng trưởng và suất chiết khấu, và công bố giới hạn dữ liệu. Nhãn kịch bản cơ sở không thay thế việc truyền đạt rủi ro trọng yếu.|Issue only after presenting sensitivity or downside analysis, supporting growth and discount assumptions and disclosing data limits. Calling it a base case does not replace communication of material risk.',
          {source:ethicsSource}),
        fullUnit('conflicts','Xung đột lợi ích và ưu tiên giao dịch|Conflicts and transaction priority',
          'Xung đột nên được tránh khi có thể; nếu không, phải công bố nổi bật, cụ thể và dễ hiểu. Giao dịch khách hàng và người sử dụng lao động thường được ưu tiên trước giao dịch cá nhân.|Avoid conflicts where possible; otherwise disclose them prominently, specifically and clearly. Client and employer transactions generally take priority over personal trades.',
          ['Công bố chung chung có thể không đủ|Generic disclosure may be insufficient','Thù lao phụ thuộc kết quả tạo thiên lệch|Outcome-linked compensation creates bias','Tài khoản cá nhân cần giám sát và pre-clearance|Personal accounts need monitoring and pre-clearance','Phân bổ lệnh phải theo quy tắc trước giao dịch|Allocation rules should exist before the trade'],
          'Đợt phát hành được phân bổ ít hơn nhu cầu|An offering is undersubscribed relative to client demand',
          'Quỹ nhận 60% số lượng đã đăng ký. Quản lý muốn phân bổ đủ cho tài khoản lớn trả phí cao rồi chia phần còn lại cho khách nhỏ; tài khoản cá nhân của họ cũng đăng ký.|A fund receives 60% of requested shares. The manager wants to fill high-fee large accounts first, then smaller clients; their personal account also requested shares.',
          'Cách phân bổ nào bảo vệ tính công bằng?|What allocation protects fair dealing?',
          'Áp dụng chính sách khách quan đã có trước, chẳng hạn phân bổ tỷ lệ cho các tài khoản phù hợp, xử lý lô lẻ theo quy tắc nhất quán và loại tài khoản cá nhân khi khách hàng chưa được phục vụ đầy đủ. Ghi lại lý do và kết quả phân bổ.|Apply a pre-existing objective policy, such as pro rata allocation among suitable accounts, handle odd lots consistently and exclude personal accounts while clients remain unfilled. Document rationale and results.',
          {source:ethicsSource})
      ]
    },
    planned('quantitative','core','CFA 02','Phân tích định lượng|Quantitative Methods','Giá trị tiền theo thời gian, xác suất, thống kê, hồi quy và kiểm định mô hình.|Time value, probability, statistics, regression and model testing.',['I','II'],2,[
      'Giá trị tiền tệ theo thời gian|Time value of money','Xác suất và phân phối|Probability and distributions','Thống kê mẫu và ước lượng|Sampling and estimation','Hồi quy và kiểm định|Regression and inference','Mô phỏng, backtest và quản trị mô hình|Simulation, backtesting and model governance'
    ]),
    planned('economics','core','CFA 03','Kinh tế học|Economics','Cung cầu, cấu trúc ngành, chu kỳ, chính sách, lạm phát, tiền tệ và tỷ giá.|Supply and demand, industry structure, cycles, policy, inflation, money and FX.',['I','II'],2,[
      'Cung, cầu và độ co giãn|Supply, demand and elasticity','Cấu trúc thị trường và doanh nghiệp|Market structure and the firm','Chu kỳ kinh doanh và chỉ báo|Business cycles and indicators','Chính sách tiền tệ và tài khóa|Monetary and fiscal policy','Thương mại, dòng vốn và tỷ giá|Trade, capital flows and FX'
    ]),
    planned('fsa','core','CFA 04','Phân tích báo cáo tài chính|Financial Statement Analysis','Chuẩn hóa báo cáo, phân tích chất lượng lợi nhuận, tỷ số, mô hình và ngành tài chính.|Normalize statements, assess earnings quality, ratios, modeling and financial institutions.',['I','II'],2,[
      'Khung phân tích và chuẩn hóa|Analysis framework and normalization','Doanh thu, chi phí và thuế|Revenue, expense and tax','Tài sản dài hạn, tồn kho và nợ|Long-lived assets, inventory and debt','Dòng tiền và chất lượng báo cáo|Cash flow and reporting quality','Mô hình dự báo và định giá đầu vào|Forecast model and valuation inputs'
    ]),
    planned('corporate-finance','core','CFA 05','Tài chính doanh nghiệp|Corporate Finance','Quản trị, vốn lưu động, ngân sách vốn, cấu trúc vốn và tái cấu trúc doanh nghiệp.|Governance, working capital, capital budgeting, capital structure and restructuring.',['I','II'],2,[
      'Quản trị và các bên liên quan|Governance and stakeholders','Vốn lưu động và thanh khoản|Working capital and liquidity','NPV và quyết định dự án|NPV and project decisions','Chi phí vốn và cấu trúc vốn|Cost of capital and capital structure','M&A, tái cấu trúc và hành động doanh nghiệp|M&A, restructuring and corporate actions'
    ]),
    planned('equity','core','CFA 06','Đầu tư cổ phiếu|Equity Investments','Thị trường, ngành, lợi thế doanh nghiệp, dòng tiền và mô hình định giá cổ phiếu.|Markets, industries, business quality, cash flow and equity valuation.',['I','II'],3,[
      'Cấu trúc thị trường và chỉ số|Markets and indexes','Phân tích ngành và lợi thế|Industry and competitive advantage','Dự báo doanh thu, biên và ROIC|Forecasting revenue, margin and ROIC','DDM, FCFE và định giá tương đối|DDM, FCFE and relative valuation','Luận điểm, rủi ro và biên an toàn|Thesis, risk and margin of safety'
    ]),
    planned('fixed-income','core','CFA 07','Đầu tư trái phiếu|Fixed Income','Dòng tiền, lợi suất, đường cong lãi suất, duration, tín dụng và sản phẩm có quyền chọn.|Cash flows, yields, curves, duration, credit and option-embedded securities.',['I','II','III'],3,[
      'Cấu trúc trái phiếu và lợi suất|Bond structures and yields','Định giá theo lãi suất giao ngay|Spot-rate valuation','Duration, convexity và rủi ro lãi suất|Duration, convexity and rate risk','Tín dụng, thu hồi và spread|Credit, recovery and spreads','Danh mục trái phiếu và phòng hộ|Fixed-income portfolios and hedging'
    ]),
    planned('derivatives','core','CFA 08','Công cụ phái sinh và quản trị rủi ro|Derivatives and Risk Management','Kỳ hạn, tương lai, quyền chọn, hoán đổi, không arbitrage và ứng dụng phòng hộ.|Forwards, futures, options, swaps, no-arbitrage and hedging applications.',['I','II','III'],3,[
      'Payoff, profit và no-arbitrage|Payoff, profit and no-arbitrage','Kỳ hạn và tương lai|Forwards and futures','Quyền chọn và các Greek|Options and Greeks','Hoán đổi và định giá|Swaps and valuation','Thiết kế chiến lược phòng hộ|Designing a hedge'
    ]),
    planned('alternatives','core','CFA 09','Đầu tư thay thế|Alternative Investments','Bất động sản, hạ tầng, vốn tư nhân, private credit, hedge funds, hàng hóa và tài sản số.|Real estate, infrastructure, private capital, private credit, hedge funds, commodities and digital assets.',['I','II'],3,[
      'Đặc điểm, phí và thanh khoản|Characteristics, fees and liquidity','Bất động sản và hạ tầng|Real estate and infrastructure','Private equity, venture và private credit|Private equity, venture and private credit','Hedge funds và hàng hóa|Hedge funds and commodities','Định giá, rủi ro và đo hiệu quả|Valuation, risk and performance'
    ]),
    planned('portfolio','core','CFA 10','Quản lý danh mục và hoạch định tài sản|Portfolio Management and Wealth Planning','IPS, phân bổ tài sản, đa dạng hóa, rủi ro, hành vi và danh mục cá nhân/tổ chức.|IPS, asset allocation, diversification, risk, behavior and individual or institutional portfolios.',['I','II','III'],4,[
      'Mục tiêu, ràng buộc và IPS|Objectives, constraints and IPS','Đo lợi suất và rủi ro danh mục|Portfolio return and risk','Đa dạng hóa, CAPM và beta|Diversification, CAPM and beta','Phân bổ, tái cân bằng và thuế|Allocation, rebalancing and tax','Wealth planning và quản trị rủi ro|Wealth planning and risk management'
    ]),
    planned('asset-allocation','advanced','L3 01','Phân bổ tài sản|Asset Allocation','Kỳ vọng thị trường vốn, phân bổ chiến lược, chiến thuật và danh mục theo nghĩa vụ.|Capital market expectations, strategic and tactical allocation and liability-aware portfolios.',['III'],4,[
      'Kỳ vọng lợi suất và rủi ro|Return and risk expectations','Phân bổ chiến lược|Strategic allocation','Phân bổ chiến thuật|Tactical allocation','Goals-based và liability-driven|Goals-based and liability-driven','Stress test và quản trị thanh khoản|Stress testing and liquidity'
    ]),
    planned('performance','advanced','L3 02','Đo lường và đánh giá hiệu quả|Performance Measurement','Attribution, appraisal, GIPS, lựa chọn quản lý và chất lượng thực thi.|Attribution, appraisal, GIPS, manager selection and execution quality.',['III'],4,[
      'Time-weighted và money-weighted return|Time- and money-weighted return','Attribution theo tài sản và yếu tố|Asset and factor attribution','Đánh giá kỹ năng điều chỉnh rủi ro|Risk-adjusted appraisal','Trình bày kết quả và GIPS|Performance presentation and GIPS','Lựa chọn và giám sát nhà quản lý|Manager selection and monitoring'
    ]),
    planned('pathways','advanced','L3 03','Các hướng chuyên sâu Level III|Level III Pathways','Portfolio Management, Private Markets và Private Wealth qua case study và bản ghi nhớ quyết định.|Portfolio Management, Private Markets and Private Wealth through cases and decision memos.',['III'],4,[
      'Chọn pathway và năng lực mục tiêu|Choosing a pathway and target skills','Portfolio Management case|Portfolio Management case','Private Markets case|Private Markets case','Private Wealth case|Private Wealth case','Capstone cho ủy ban đầu tư|Investment committee capstone'
    ])
  ];

  const current={courseId:null,unitIndex:0};
  const completionSet=()=>new Set(state.deepCourseCompleted||[]);
  const completionKey=(course,unit)=>'deep|'+course.id+'|'+unit.id;
  const courseDone=course=>course.units.filter(unit=>completionSet().has(completionKey(course,unit))).length;
  const bookmarkKey=course=>'course:'+course.id;
  const visibleCourses=()=>courses.filter(course=>course.levels.includes(studyLevel));
  const groupLabel={
    foundation:'NỀN TẢNG TRƯỚC CFA|FOUNDATIONS BEFORE CFA',
    core:'CHƯƠNG TRÌNH CFA CỐT LÕI|CFA CORE CURRICULUM',
    advanced:'LEVEL III VÀ ỨNG DỤNG|LEVEL III AND APPLICATION'
  };
  const groupDescription={
    foundation:'Đọc trước để hiểu doanh nghiệp, pháp lý và ngôn ngữ kế toán.|Read first to understand businesses, legal structure and accounting language.',
    core:'Mười nhóm năng lực cốt lõi theo cấu trúc CFA Institute.|Ten core competency areas aligned with CFA Institute.',
    advanced:'Phân bổ, đo hiệu quả và ba hướng chuyên sâu của Level III.|Allocation, performance and the three Level III pathways.'
  };

  function courseMatches(course){
    const haystack=[course.title,course.description,...course.units.map(unit=>unit.title)].join(' ').toLowerCase();
    if(currentSearch&&!haystack.includes(currentSearch))return false;
    const done=courseDone(course),saved=state.bookmarkedModules.includes(bookmarkKey(course));
    if(currentFilter==='completed'&&done!==course.units.length)return false;
    if(currentFilter==='studying'&&(!done||done===course.units.length))return false;
    if(currentFilter==='bookmarked'&&!saved)return false;
    return true;
  }

  function courseCard(course){
    const done=courseDone(course),pct=Math.round(done/course.units.length*100);
    const saved=state.bookmarkedModules.includes(bookmarkKey(course));
    const ready=course.status==='ready';
    return '<article class="course-card '+(ready?'':'is-planned')+'">'+
      '<div class="course-card-top"><span class="course-code">'+esc(course.code)+' · LEVEL '+esc(course.levels.join('/'))+'</span>'+
      '<span class="course-status '+(ready?'ready':'')+'">'+esc(ready?tr('ĐÃ CÓ NỘI DUNG|CONTENT READY'):tr('ĐỢT |BATCH ')+course.batch)+'</span></div>'+
      '<h4>'+esc(tr(course.title))+'</h4><p>'+esc(tr(course.description))+'</p>'+
      '<div class="course-card-footer"><div class="course-progress"><span>'+done+'/'+course.units.length+' '+esc(tr('bài hoàn thành|units completed'))+'</span><span class="course-progress-track"><i style="width:'+pct+'%"></i></span></div>'+
      '<div class="flex items-center gap-3"><button aria-label="'+esc(tr('Đánh dấu khóa học|Bookmark course'))+'" aria-pressed="'+saved+'" onclick="toggleDeepCourseBookmark(\''+course.id+'\')">'+(saved?'★':'☆')+'</button>'+
      '<button class="course-open" '+(ready?'onclick="openDeepCourse(\''+course.id+'\',0)"':'disabled')+'>'+esc(tr(ready?'Mở khóa học →|Open course →':'Nội dung ở đợt |Content in batch ')+(!ready?course.batch:''))+'</button></div></div></article>';
  }

  function renderRoadmap(){
    const list=visibleCourses(),ready=list.filter(course=>course.status==='ready');
    const totalUnits=ready.reduce((sum,course)=>sum+course.units.length,0);
    const complete=ready.reduce((sum,course)=>sum+courseDone(course),0);
    byId('active-level-label').textContent='LVL '+studyLevel;
    document.querySelector('[data-i18n="libraryHeading"]').textContent=tr('Lộ trình CFA Level '+studyLevel+'|CFA Level '+studyLevel+' learning roadmap');
    byId('overall-mastery-pct').textContent=(totalUnits?Math.round(complete/totalUnits*100):0)+'%';
    byId('overall-mastery-bar').style.width=(totalUnits?Math.round(complete/totalUnits*100):0)+'%';
    byId('overall-mastery-pct').nextElementSibling.textContent='('+complete+'/'+totalUnits+')';
    let html='<section class="course-roadmap-intro"><div><span class="lesson-kicker">'+esc(tr('CHƯƠNG TRÌNH MỚI · ĐỢT 1|NEW CURRICULUM · BATCH 1'))+'</span><h2>'+esc(tr('Học theo khóa, không học theo danh sách xổ xuống|Learn by course, not by expanding lists'))+'</h2><p>'+esc(tr('Mỗi khóa có đúng 5 bài độc lập. Khi mở khóa học, chọn một bài ở cột trái và chỉ nội dung của bài đó xuất hiện. Các khóa sau được chia đợt để mỗi bài có case study, lời giải và nguồn rõ ràng.|Each course has exactly five independent units. Open a course, choose one unit on the left and only that unit appears. Later courses are split into batches so every unit can have a case, worked reasoning and clear sources.'))+'</p></div>'+
      '<div class="course-roadmap-summary"><strong>'+list.length+'</strong><span>'+esc(tr('khóa trong roadmap Level '+studyLevel+'|courses in the Level '+studyLevel+' roadmap'))+'</span><strong>'+totalUnits+'</strong><span>'+esc(tr('bài chuyên sâu đã sẵn sàng|deep units currently ready'))+'</span></div></section>';
    for(const group of ['foundation','core','advanced']){
      const items=list.filter(course=>course.group===group&&courseMatches(course));
      if(!items.length)continue;
      html+='<section class="course-section"><div class="course-section-head"><h3>'+esc(tr(groupLabel[group]))+'</h3><p>'+esc(tr(groupDescription[group]))+'</p></div><div class="course-grid">'+items.map(courseCard).join('')+'</div></section>';
    }
    byId('modules-list-container').innerHTML=html||'<div class="course-phase-note">'+esc(tr('Không có khóa phù hợp với bộ lọc.|No courses match this filter.'))+'</div>';
  }

  function lessonHtml(course,unit,index){
    const done=completionSet().has(completionKey(course,unit));
    const formula=unit.formula?'<div class="lesson-formula">'+equation(unit.formula)+'<p>'+esc(tr(unit.symbols))+'</p></div>':'';
    const video=unit.videoId?'<section class="lesson-video"><iframe loading="lazy" src="https://www.youtube-nocookie.com/embed/'+esc(unit.videoId)+'" title="'+esc(unit.videoTitle)+'" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><div class="lesson-video-meta"><span>'+esc(unit.videoTitle)+'</span><a href="https://www.youtube.com/watch?v='+esc(unit.videoId)+'" target="_blank" rel="noopener noreferrer">YouTube ↗</a></div></section>':'';
    const disclaimer=course.disclaimer?'<div class="course-phase-note">'+esc(tr(course.disclaimer))+'</div>':'';
    return '<article class="course-unit-detail" id="course-unit-detail"><span class="lesson-kicker">'+esc(course.code)+' · '+String(index+1).padStart(2,'0')+'/05</span><h3>'+esc(tr(unit.title))+'</h3><p class="lesson-lead">'+esc(tr(unit.lead))+'</p>'+disclaimer+
      '<section class="lesson-block"><h4>'+esc(tr('Khung phân tích cần nhớ|Decision framework'))+'</h4><div class="lesson-points">'+unit.points.map(point=>'<div class="lesson-point">'+esc(tr(point))+'</div>').join('')+'</div></section>'+formula+
      '<section class="lesson-case"><small>'+esc(tr('CASE STUDY · TÌNH HUỐNG GIẢ ĐỊNH|CASE STUDY · SIMULATION'))+'</small><h4>'+esc(tr(unit.caseTitle))+'</h4><p class="case-question">'+esc(tr(unit.caseFacts))+'</p><p class="case-question"><strong>'+esc(tr('Câu hỏi quyết định: |Decision question: '))+'</strong>'+esc(tr(unit.caseQuestion))+'</p><div class="case-solution"><strong>'+esc(tr('Lập luận và kết luận|Reasoning and conclusion'))+'</strong><br>'+esc(tr(unit.solution))+'</div></section>'+video+
      '<div class="lesson-actions"><a class="lesson-source" href="'+esc(unit.source||course.source||officialCurriculum)+'" target="_blank" rel="noopener noreferrer">'+esc(tr('Nguồn nghiên cứu ↗|Research source ↗'))+'</a><div class="lesson-actions-group">'+
      (index?'<button class="lesson-secondary" onclick="selectDeepUnit('+(index-1)+')">← '+esc(tr('Bài trước|Previous'))+'</button>':'')+
      '<button class="lesson-complete '+(done?'done':'')+'" onclick="toggleDeepUnitComplete()">'+esc(tr(done?'✓ Đã hoàn thành|✓ Completed':'Đánh dấu hoàn thành|Mark complete'))+'</button>'+
      (index<course.units.length-1?'<button class="lesson-secondary" onclick="selectDeepUnit('+(index+1)+')">'+esc(tr('Bài tiếp|Next'))+' →</button>':'')+'</div></div></article>';
  }

  function renderCourseModal(){
    const course=courses.find(item=>item.id===current.courseId);
    if(!course||course.status!=='ready')return;
    const unit=course.units[current.unitIndex];
    const complete=completionSet();
    byId('drawer-module-code').textContent=course.code+' · LEVEL '+course.levels.join('/');
    byId('drawer-module-title').textContent=tr(course.title);
    byId('drawer-los-counter').textContent=courseDone(course)+'/5';
    const sourceButton=byId('drawer-course-source');
    if(sourceButton){sourceButton.removeAttribute('onclick');sourceButton.textContent=tr('Nguồn khóa học|Course sources');sourceButton.onclick=()=>window.open(course.source||officialCurriculum,'_blank','noopener')}
    const nav='<nav class="course-unit-nav" aria-label="'+esc(tr('Năm bài trong khóa học|Five course units'))+'"><span class="course-unit-nav-label">'+esc(tr('Chọn một bài|Choose one unit'))+'</span>'+course.units.map((item,index)=>
      '<button class="course-unit-button" aria-current="'+(index===current.unitIndex)+'" onclick="selectDeepUnit('+index+')"><span class="course-unit-number">'+String(index+1).padStart(2,'0')+'</span><span class="course-unit-name">'+esc(tr(item.title))+'</span><span class="course-unit-check">'+(complete.has(completionKey(course,item))?'✓':'')+'</span></button>'
    ).join('')+'</nav>';
    byId('drawer-los-list').innerHTML='<div class="course-modal-layout">'+nav+lessonHtml(course,unit,current.unitIndex)+'</div>';
  }

  window.openDeepCourse=(courseId,unitIndex=0)=>{
    current.courseId=courseId;current.unitIndex=unitIndex;renderCourseModal();
    byId('los-drawer').classList.remove('hidden');byId('los-drawer').classList.add('flex');
  };
  window.selectDeepUnit=index=>{current.unitIndex=index;renderCourseModal();byId('course-unit-detail')?.scrollTo?.(0,0)};
  window.toggleDeepUnitComplete=()=>{
    const course=courses.find(item=>item.id===current.courseId),unit=course.units[current.unitIndex];
    const set=completionSet(),key=completionKey(course,unit);set.has(key)?set.delete(key):set.add(key);
    state.deepCourseCompleted=[...set];saveState();renderRoadmap();renderCourseModal();
  };
  window.toggleDeepCourseBookmark=courseId=>{
    const course=courses.find(item=>item.id===courseId),key=bookmarkKey(course),set=new Set(state.bookmarkedModules);
    set.has(key)?set.delete(key):set.add(key);state.bookmarkedModules=[...set];saveState();renderRoadmap();
  };
  window.renderLibraryModules=renderRoadmap;

  const priorRefresh=window.refreshWorkspace;
  window.refreshWorkspace=function(){priorRefresh();if(current.courseId)renderCourseModal()};

  const priorClose=window.closeLosDrawer;
  window.closeLosDrawer=function(){current.courseId=null;priorClose()};
})();
