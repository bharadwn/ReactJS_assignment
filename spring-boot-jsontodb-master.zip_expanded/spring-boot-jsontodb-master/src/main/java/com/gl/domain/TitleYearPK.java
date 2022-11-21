package com.gl.domain;

import java.io.Serializable;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
//@Embeddable
public class TitleYearPK implements Serializable {
    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	protected String title;
    protected String year;

    public TitleYearPK() {}

    public TitleYearPK(String aTitle, String aYear) {
        this.title = aTitle;
        this.year = aYear;
    }
    
    public boolean equals(Object obj) {
//    	if (this.title.equals(((TitleYearPK)obj).title)){
//    		if (this.year.equals(((TitleYearPK)obj).year)) {
//    			return true;
//    		}
//    	}
//    	return false;
    	return super.equals(obj);
    }
    public int hashCode() {
    	return super.hashCode();
    }
}